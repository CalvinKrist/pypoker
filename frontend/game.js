import card_sheet from './assets/cards.png';
import user_icon from './assets/user_icon.png';
import card_back from './assets/card_back.png';
import {NOT_READY, READY} from "../messages/readystate";

export let game;
export let renderer;

function arrayRotate(arr, reverse) {
    arr.push(arr.shift());
    return arr;
  }

// global object with game options
let gameOptions = {

    // card width, in pixels
    cardWidth: 334,

    // card height, in pixels
    cardHeight: 440,

    cardScale: 0.3
}
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        backgroundColor: 0xaaaaaa,
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "canvas",
        },
        scene: PlayGame
    }
    game = new Phaser.Game(gameConfig);
    renderer = game.scene;
    window.focus();
}

function resizedw(){
    renderer.scenes[0].scene.restart();
}

var doit;
window.onresize = function(event) {
    clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};


class PlayGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
        this.state = null;
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
        this.load.image("card_back", card_back);
    }
    create() {
        if(this.state == null) {
            return;
        }

        // create an array with 52 integers from 0 to 51
        this.deck = Phaser.Utils.Array.NumberArray(0, 51);

        // Render poker table
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const table = this.add.ellipse(screenCenterX, screenCenterY, this.cameras.main.width / 1.4, this.cameras.main.height * 0.45, 0x35654d);

        const center_x = 0.5;
        const player_bottom = 0.85;
        const player_top = 0.15;
        const left_player_x = 0.3;
        const right_player_x = 0.7;
        const far_left_player_x = 0.2;
        const far_right_player_x = 0.8;

        const upper_edge_y = 0.22;
        const lower_edge_y = 0.78;

        const upper_shared_y = 0.19;
        const lower_shared_y = 0.81;

        const player_location_map = {
            1: [[center_x,  player_bottom]],
            2: [[center_x,  player_bottom], [center_x, player_top]],
            3: [[center_x,  player_bottom], [left_player_x, upper_shared_y], [right_player_x, upper_shared_y]],
            4: [[right_player_x,  lower_shared_y], [left_player_x,  lower_shared_y], [left_player_x, upper_shared_y], [right_player_x, upper_shared_y]],
            5: [[right_player_x,  lower_shared_y], [left_player_x,  lower_shared_y], [far_left_player_x, upper_edge_y], [center_x, player_top], [far_right_player_x, upper_edge_y]],
            6: [[center_x, player_bottom], [far_left_player_x, lower_edge_y], [far_left_player_x, upper_edge_y], [center_x, player_top], [far_right_player_x, upper_edge_y], [far_right_player_x, lower_edge_y],],
        }

        const player_ids = this.state.player_order["$items"];
        const players = this.state.player_map["$items"];
        console.log("player ids")
        console.log(player_ids)
        console.log("players")
        console.log(players)
        console.log("me")
        console.log(this.userId)
        // Rotate the player state so the player is in the center bottom
        let player_keys = Array.from(player_ids.values())
        while(players.get(player_keys[0]).id != this.userId) {
            arrayRotate(player_keys);
        }

        let index = 0;
        for (let key of player_keys) {
            let player_loc = player_location_map[players.size][index++];
            const y = this.cameras.main.worldView.y + this.cameras.main.height * player_loc[1];
            const x = this.cameras.main.worldView.x + this.cameras.main.width * player_loc[0];
            let user = this.add.sprite(x, y, "user_icon");
            user.setScale(this.cameras.main.height * 0.000135);

            let name = this.add.text(x, user.getTopCenter().y - 8, players.get(key).id, {
                fontFamily: 'Quicksand',
                fontSize: '16px',
                color: '#000',
                align: 'center'
            }).setOrigin(0.5);
            
            if(this.state.running) {
                let chips = this.add.text(x, user.getBottomCenter().y + 8, players.get(key).bb + " bb", {
                    fontFamily: 'Quicksand',
                    fontSize: '16px',
                    color: '#000',
                    align: 'center'
                }).setOrigin(0.5);
            }
            
            let hand = Array.from(players.get(key).hand["$items"].values());
            if(hand.length > 1) {
                if(players.get(key).id == this.userId) {
                    let card1_value = hand[0].value;
                    if(card1_value == 14) {
                        card1_value = 1;
                    }
                    let card2_value = hand[1].value;
                    if(card2_value == 14) {
                        card2_value = 1;
                    }
                    
                    let card1 = this.createCard(hand[0].suit * 13 + card1_value - 1);
                    let card2 = this.createCard(hand[1].suit * 13 + card2_value - 1);

                    let y_offset = card2.height * card2.scale * 1.1;
                    card1.y = y - y_offset;
                    card2.y = y - y_offset;
                    card1.x = x - card1.width * card1.scale * 0.6;
                    card2.x = x + card2.width * card2.scale * 0.6;
                } else {
                    let card_back_1 = this.add.sprite(x, y + (user.displayHeight + 18) * ((y < screenCenterY) * 2 - 1), "card_back").setOrigin(0.5);
                    card_back_1.displayWidth = gameOptions.cardWidth * gameOptions.cardScale * 0.8;
                    card_back_1.displayHeight = gameOptions.cardHeight * gameOptions.cardScale * 0.8;
                    card_back_1.x -= card_back_1.displayWidth * 0.05;
                    let card_back_2 = this.add.sprite(x, y + (user.displayHeight + 23) * ((y < screenCenterY) * 2 - 1), "card_back").setOrigin(0.5);
                    card_back_2.displayWidth = gameOptions.cardWidth * gameOptions.cardScale * 0.8;
                    card_back_2.displayHeight = gameOptions.cardHeight * gameOptions.cardScale * 0.8;
                    card_back_2.x += card_back_2.displayWidth * 0.05;
                }
            }

            if(players.get(key).isDealer) {
                let chit_x = x - user.displayWidth / 2
                const dealer_chit_outline = this.add.ellipse(chit_x, y, 40, 40, 0x000);
                const dealer_chit_fill = this.add.ellipse(chit_x, y, 32, 32, 0xffffff);
                let waiting_message = this.add.text(chit_x, y, 'D', {
                    fontFamily: 'Quicksand',
                    fontSize: '32px',
                    color: '#000',
                    align: 'center'
                }).setOrigin(0.5)
            }
        }   
        
        if(!this.state.running) {
            if(!this.state.player_map["$items"].get(this.userId).ready) {
                let startbutton = this.drawButton("BEGIN", screenCenterX, screenCenterY, () => {this.room.send("ready", READY)});
            } else {
                let waiting_message = this.add.text(screenCenterX, screenCenterY, 'WAITING', {
                    fontFamily: 'Quicksand',
                    fontSize: '32px',
                    color: '#fff',
                    align: 'center'
                }).setOrigin(0.5)
            }
        }

        // Create player actions
        if(this.state.running && players.get(this.userId).isTurn) {
            let fold = this.drawButton("Fold", this.cameras.main.width * 0.7, this.cameras.main.height * 0.9, () => {});
            let call = this.drawButton("Call", fold.x + fold.width + 20, this.cameras.main.height * 0.9, () => {});
            let raise = this.drawButton("Raise", call.x + call.width + 30, this.cameras.main.height * 0.9, () => {});
        }
    }

    drawButton(text, x, y, callback) {
        let button = this.add.text(x, y, text, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5)
        .setPadding(10)
        .setStyle({backgroundColor:"#111"})
        .setInteractive({useHandCursor: true})
        .on('pointerover', () => button.setStyle({fill: "#f39c12"}))
        .on('pointerout', () => button.setStyle({fill: "#FFF"}))
        .on('pointerdown', callback);

        return button;
    }

    updateState(gameState) {
        this.state = gameState;
        this.scene.restart();
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setRoom(room) {
        this.room = room;
    }

    // method to create a card, given an index
    createCard(i) {
        // the card itself, a sprite created outside the stage, on the left
        let card = this.add.sprite(- gameOptions.cardWidth * gameOptions.cardScale, game.config.height / 2, "cards", this.deck[i]);

        // scale the sprite
        card.setScale(gameOptions.cardScale);

        // return the card
        return card;
    }

}
