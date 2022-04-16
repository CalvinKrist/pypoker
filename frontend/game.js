import card_sheet from './assets/cards.png';
import user_icon from './assets/user_icon.png';
import active_user_icon from './assets/active_user_icon.png';
import card_back from './assets/card_back.png';
import poker_chip from './assets/poker_chip.png';
import round_rect from './assets/round_rect.png';
import  { Button}  from "./Button"
import { UserSprite } from './UserSprite';
import { READY } from "../messages/readystate";
import PubSub from 'pubsub-js'
import Phaser from "./phaser.min.js";
import {gameOptions} from "./GameOptions"
import { GameState } from '../state/GameState';
import { FOLD, CALL, RAISE, raise } from "../messages/playeraction";

export let game;
let renderer;

function arrayRotate(arr, reverse) {
    arr.push(arr.shift());
    return arr;
}


export function createGame() {
    document.body.style['overflow'] = 'hidden';

    let gameConfig = {
        type: Phaser.AUTO,
        backgroundColor: 0xcccccc,
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "canvas",
        },
        scene: PlayGame,
        dom: {
            createContainer: true
        },
    }
    game = new Phaser.Game(gameConfig);
    renderer = game.scene;
    window.focus();

    var doit;
    window.onresize = function (event) {
        clearTimeout(doit);
        doit = setTimeout(resizedw, 100);
    };

    return renderer;
}

function resizedw() {
    renderer.scenes[0].scene.restart();
}

class DealerChit extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        scene.children.add(this);

        this.dealer_chit_outline = scene.add.ellipse(0, 0, 40, 40, 0x000);
        this.dealer_chit_fill = scene.add.ellipse(0, 0, 32, 32, 0xffffff);
        this.dealer_chit_label = scene.add.text(0, 0, 'D', {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5)

        this.add(this.dealer_chit_outline);
        this.add(this.dealer_chit_fill);
        this.add(this.dealer_chit_label);
    }
}


/*
This implementes Player, but because this is JS and not TS 
the 'implements Player' syntax doesn't work
*/
class PlayGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
        this.state = new GameState();
        this.userId = null;
        this.room = null;
    }
    preload() {
        // loading the sprite sheet with all cards
        this.load.spritesheet("cards", card_sheet, {
            frameWidth: gameOptions.cardWidth,
            frameHeight: gameOptions.cardHeight
        });

        this.load.image("user_icon", user_icon);
        this.load.image("active_user_icon", active_user_icon);
        this.load.image("card_back", card_back);
        this.load.image("poker_chip", poker_chip);
        this.load.image("round_rect", round_rect);

        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
    }

    create() {
        // create an array with 52 integers from 0 to 51
        this.deck = Phaser.Utils.Array.NumberArray(0, 51);

        // Render poker table
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.table = this.add.ellipse(screenCenterX, screenCenterY, this.cameras.main.width / 1.4, this.cameras.main.height * 0.45, 0x35654d);

        let pot_size_x_anchor = 10;
        this.pot_size = this.add.text(pot_size_x_anchor, this.cameras.main.height * 0.98, "Pot: " + this.state.pot, {
            fontFamily: 'Quicksand',
            fontSize: '64px',
            color: '#000',
            align: 'center'
        }).setOrigin(1).setVisible(false);
        PubSub.subscribe('running', (_, change) => {
            if (change.previousValue != change.value) {
                this.pot_size.setVisible(change.value);
            }
        });
        PubSub.subscribe('pot', (_, change) => {
            if (change.previousValue != change.value) {
                this.pot_size.setText("Pot: " + change.value);
                this.pot_size.x = pot_size_x_anchor + this.pot_size.displayWidth;
            }
        });
        PubSub.subscribe('num-winners', (_, change) => {
            if (this.state.winners["$items"].length > 0) {
                this.pot_size.setVisible(false);
            }
        });

        this.dealerChit = new DealerChit(this, 0, 0);
        this.dealerChit.setVisible(false);

        let player_sprites = [];

        for (let i = 0; i < 6; i++) {
            player_sprites.push(new UserSprite(this, -1000, -1000, this.dealerChit));
        }

        this.raise_btn = this.drawButton("Raise To", this.cameras.main.width, this.cameras.main.height * 0.9, () => { });
        this.raise_btn.x -= this.raise_btn.width * 0.5 + 30;
        this.call = this.drawButton("Call", this.raise_btn.x - this.raise_btn.width * 0.5 - 5, this.cameras.main.height * 0.9, () => { this.room.send("call", {}) });
        this.call.x -= this.call.width * 0.5;
        this.fold = this.drawButton("Fold", this.call.x - this.call.width * 0.5 - 5 , this.cameras.main.height * 0.9, () => { this.room.send("fold", {}) });
        this.fold.x -= this.fold.width * 0.5;

        this.fold.setVisible(false);
        this.call.setVisible(false);
        this.raise_btn.setVisible(false);

        this.fold.setBgColor(0xd4a54e)
        this.call.setBgColor(0xd4a54e)
        this.raise_btn.setBgColor(0xd4a54e)
        this.fold.setBgMouseOverColor(0xbd843a)
        this.call.setBgMouseOverColor(0xbd843a)
        this.raise_btn.setBgMouseOverColor(0xbd843a)
        this.fold.setFontMouseOverColor("#fff")
        this.call.setFontMouseOverColor("#fff")
        this.raise_btn.setFontMouseOverColor("#fff")

        this.bet_submit_btn = this.drawSquareButton("Send", this.raise_btn.x + this.raise_btn.displayWidth * 0.3, this.raise_btn.y - this.raise_btn.displayHeight * 1.2, () => { });
        this.bet_submit_btn.setStyle({
            fontFamily: 'Quicksand',
            fontSize: '18px',
            color: '#fff',
            align: 'center'
        });
        this.bet_submit_btn.setVisible(false);
        this.betInput = this.add.rexInputText(this.bet_submit_btn.x - this.bet_submit_btn.width - 5, this.bet_submit_btn.y, 80, 40, {
            type: 'textarea',
            fontFamily: 'Quicksand',
            text: '',
            fontSize: '24px',
            backgroundColor: 'white',
            paddingTop: 0,
            paddingBottom: 0,
            color: '#000000',
            borderColor: '#000000',
            border: 3,
        });
        this.betInput.setVisible(false);

        this.betInput.height = this.bet_submit_btn.displayHeight;
        this.betInput.setTooltip("Bet size in big blinds");
        this.bet_submit_btn.on('pointerdown', () => {
            this.room.send("raise", raise(Number(this.betInput.text)))
        });
        let visible = false;
        this.betInput.visible = visible;
        this.bet_submit_btn.visible = visible;

        this.raise_btn.on('pointerdown', () => {
            visible = !visible;
            this.betInput.visible = visible;
            this.bet_submit_btn.visible = visible;
        });

        let player_pos_map = new Map();
        let player_states = new Map();

        PubSub.subscribe('state-change', (_, __) => {
            for (let player_sprite of player_sprites) {
                player_sprite.setVisible(false);
            }

            const player_ids = this.state.player_order;
            const players = this.state.player_map;
            // Rotate the player state so the player is in the center bottom
            let player_keys = Array.from(player_ids.values())
            if (player_keys.length > 0) {
                while (players.get(player_keys[0]).id != this.userId) {
                    arrayRotate(player_keys);
                }
            }

            let index = 0;
            for (let key of player_keys) {
                const [x, y] = this.get_player_location(players.size, index);

                player_sprites[index].setPosition(x, y);

                let player_state = JSON.stringify(players.get(key));
                // Update the sprite when the player changes
                if (player_pos_map.has(key) && player_pos_map.get(key) == index && player_states.get(key) != player_state) {
                    player_sprites[index].updatePlayer(this, players.get(key));
                    // Update the sprite when a new player is being used for the sprite
                } else if (!player_pos_map.has(key) || player_pos_map.get(key) != index) {
                    player_sprites[index].setNewPlayer(this, players.get(key));
                }

                player_pos_map.set(key, index);
                player_states.set(key, player_state);

                player_sprites[index++].setVisible(true);
            }

            // Create player actions
            if (this.state.winners["$items"].length == 0 && this.state.running && players.get(this.userId).isTurn) {
                this.fold.setVisible(true);
                this.call.setVisible(true);
                this.raise_btn.setVisible(true);
            } else {
                visible = false;
                this.fold.setVisible(false);
                this.call.setVisible(false);
                this.raise_btn.setVisible(false);
                this.betInput.setVisible(false);
                this.bet_submit_btn.setVisible(false);
            }
        })

        // TODO: when the window is resized mid-game, this becomes visible
        this.startbutton = this.drawButton("BEGIN", screenCenterX, screenCenterY, () => {
            this.room.send("ready", READY);
            this.waiting_message.visible = true;
            this.startbutton.visible = false;
        });
        this.waiting_message = this.add.text(screenCenterX, screenCenterY, 'WAITING', {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5).setVisible(false);
        PubSub.subscribe('running', (_, change) => {
            if (change.previousValue != change.value) {
                if (change.value == true) {
                    this.waiting_message.setVisible(false);
                } else {
                    this.startbutton.setVisible(true);
                }
            }
        });

        PubSub.subscribe('num-winners', (_, __) => {
            if (this.state.winners["$items"].length > 0) {
                this.startbutton.setVisible(true);
                this.startbutton.setText("Next Hand");
                this.startbutton.y = screenCenterY * 1.3;
                this.children.bringToTop(this.startbutton);
            }
        });

        // Draw the river
        // TODO: when the river is visible and a window is resized, the 
        // old river is not deleted even when the new one is drawn
        let board_sprites = [];
        let update_board = () => {
            for (let card of board_sprites) {
                card.destroy();
            }
            board_sprites = []

            let board = Array.from(this.state.board)
            let scale_up = 1.2;
            if (board.length > 0) {
                let card_with = gameOptions.cardWidth * gameOptions.cardScale * scale_up + 15;
                let x_offset = screenCenterX - card_with * board.length / 2 + card_with / 2;

                let i = 0;
                for (let card of board) {
                    let card_sprite = this.createCard(card.suit, card.value).setOrigin(0.5);
                    card_sprite.scale *= scale_up;
                    card_sprite.x = i * card_with + x_offset;
                    card_sprite.y = screenCenterY;

                    i += 1;
                    board_sprites.push(card_sprite);
                }
            }
        }
        PubSub.subscribe("num-board", (_) => {
            update_board();
        })

        // Draw the winner
        this.winner_text = this.add.text(screenCenterX, screenCenterY * .7, '', {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#fff',
            align: 'center',
            stroke: "#000",
            fontWeight: 'bold',
            strokeThickness: 8
        }).setOrigin(0.5).setVisible(false);
        // The value is filled in, even when it's null for the server -- 
        // but it's primitive children can be undefined
        if (this.state.winningMessage != null) {
            this.winner_text.setVisible(true);
            this.winner_text.setText(this.state.winningMessage);
        }
        PubSub.subscribe('state-change', (_, __) => {
            if (this.state.winningMessage) {
                this.winner_text.setVisible(true);
                this.winner_text.setText(this.state.winningMessage);
                this.children.bringToTop(this.winner_text);
            } else {
                this.winner_text.setVisible(false);
            }
        });

        // Trigger some events immediatly so we display the correct values
        PubSub.publishSync('state-change', {});
        PubSub.publishSync('num-board', {});
        PubSub.publishSync('num-winners', {});

    } // end of create function

    drawButton(text, x, y, callback) {
        let button = new Button(this, x, y, text, callback);
        return button;
    }

    drawSquareButton(text, x, y, callback) {
        let button = this.add.text(x, y, text, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: "#111" })
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => button.setStyle({ fill: "#f39c12" }))
            .on('pointerout', () => button.setStyle({ fill: "#FFF" }))
            .on('pointerdown', callback);

        return button;
    }

    updateState(gameState) {
        gameState.player_map = new Map(Object.entries(gameState.player_map));
        gameState.player_map["$items"] = gameState.player_map;
        gameState.winners["$items"] = gameState.winners;
        gameState.player_order["$items"] = gameState.player_order;
        gameState.board["$items"] = gameState.board;

        for (let player of gameState.player_map.values()) {
            player.hand["$items"] = player.hand;
        }

        let old_num_winners = 0;
        if (this.state && this.state.winners) {
            old_num_winners = this.state.winners.length;
        }

        let old_num_board = 0;
        if (this.state && this.state.board) {
            old_num_board = this.state.board.length;
        }

        this.state = gameState;
        PubSub.publishSync('state-change', this.state);

        if (this.state.winners["$items"].length != old_num_winners) {
            PubSub.publishSync('num-winners', {});
        }

        if (this.state.board["$items"].length != old_num_board) {
            PubSub.publishSync('num-board', {});
        }
    }

    onStateChanges(changes) {
        changes.forEach(change => {
            if (typeof change.previousValue !== 'undefined') {
                PubSub.publishSync(change.field, change);
            }
        });
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setRoom(room) {
        this.room = room;
    }

    // method to create a card, given an index
    createCard(suit, value) {
        if (value == 14) {
            value = 1;
        }

        let i = suit * 13 + value - 1;

        // the card itself, a sprite created outside the stage, on the left
        let card = this.add.sprite(- gameOptions.cardWidth * gameOptions.cardScale, game.config.height / 2, "cards", this.deck[i]);

        // scale the sprite
        card.setScale(gameOptions.cardScale);

        // return the card
        return card;
    }

    get_player_location(num_players, player_index) {
        const center_x = 0.5;
        const player_bottom = 0.82;
        const player_top = 0.13;
        const left_player_x = 0.3;
        const right_player_x = 0.7;
        const far_left_player_x = 0.2;
        const far_right_player_x = 0.8;

        const upper_edge_y = 0.22;
        const lower_edge_y = 0.78;

        const upper_shared_y = 0.16;
        const lower_shared_y = 0.79;

        const mapping = {
            1: [[center_x, player_bottom]],
            2: [[center_x, player_bottom], [center_x, player_top]],
            3: [[center_x, player_bottom], [left_player_x, upper_shared_y], [right_player_x, upper_shared_y]],
            4: [[right_player_x, lower_shared_y], [left_player_x, lower_shared_y], [left_player_x, upper_shared_y], [right_player_x, upper_shared_y]],
            5: [[right_player_x, lower_shared_y], [left_player_x, lower_shared_y], [far_left_player_x, upper_edge_y], [center_x, player_top], [far_right_player_x, upper_edge_y]],
            6: [[center_x, player_bottom], [far_left_player_x, lower_edge_y], [far_left_player_x, upper_edge_y], [center_x, player_top], [far_right_player_x, upper_edge_y], [far_right_player_x, lower_edge_y]],
        }

        let player_loc = mapping[num_players][player_index];
        return [this.cameras.main.worldView.x + this.cameras.main.width * player_loc[0], this.cameras.main.worldView.y + this.cameras.main.height * player_loc[1]];
    }

    onServerError(errorMessage) {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        let errorTxt = this.add.text(screenCenterX, screenCenterY, errorMessage.error, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#ff0000',
            align: 'center',
            stroke: "#000",
            fontWeight: 'bold',
            strokeThickness: 8
        }).setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: "#111" })
            .setVisible(true);

        var tween = this.tweens.add({
            targets: errorTxt,
            alpha: 0,
            ease: 'linear',
            delay: 1000,
            duration: 500,
            onComplete: function () {
                errorTxt.destroy();
            }
        });
    }

}
