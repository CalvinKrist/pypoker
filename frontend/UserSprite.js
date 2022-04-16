import {CardSprite, CardBackSprite} from "./Card"
import { FOLD, CALL, RAISE } from "../messages/playeraction";


const ABOVE = 0;
const BELOW = 1;
const NONE = 2;


export class UserSprite extends Phaser.GameObjects.Container {
    constructor(scene, x, y, dealerChit) {
        super(scene, x, y);
        scene.children.add(this);

        this.dealerChit = dealerChit;

        let name_str = "";
        let bb = 0;
        let isDealer = false;

        this.active_user_sprite = scene.add.sprite(0, 0, "active_user_icon");
        this.inactive_user_sprite = scene.add.sprite(0, 0, "user_icon");

        // Scale the user sprite to 17.5% of the camera's height
        let scaleFactor =  scene.cameras.main.height / this.active_user_sprite.displayHeight;
        this.active_user_sprite.setScale(this.active_user_sprite.scale * scaleFactor * 0.175);
        this.inactive_user_sprite.setScale(this.inactive_user_sprite.scale * scaleFactor * 0.175);
        this.active_user_sprite.setVisible(false);

        this.add(this.active_user_sprite);
        this.add(this.inactive_user_sprite);

        this.name = scene.add.text(0, this.active_user_sprite.getBottomCenter().y + 10, name_str, {
            fontFamily: 'Quicksand',
            fontSize: '16px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.name);

        this.num_chips_label = scene.add.text(0, this.active_user_sprite.getBottomCenter().y + 32, bb + " bb", {
            fontFamily: 'Quicksand',
            fontSize: '16px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.num_chips_label);

        this.card1 = null;
        this.card2 = null;

        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth / 2, this.y);
            this.dealerChit.setVisible(true);
        }

        this.screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
        this.screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;

        this.chips = [];
        let chit_x = this.active_user_sprite.displayWidth * 0.8;
        for (let i = 0; i < 4; i++) {
            let chip_sprite = scene.add.sprite(chit_x + Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), "poker_chip").setOrigin(0.5);
            chip_sprite.displayHeight = 40;
            chip_sprite.displayWidth = 40;
            this.chips.push(chip_sprite);
            chip_sprite.setVisible(false);
            this.add(chip_sprite);
        }

        this.chip_label = scene.add.text(chit_x, 40, '0 BB', {
            fontFamily: 'Quicksand',
            fontSize: '24px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5)
        this.add(this.chip_label);
        this.chip_label.setVisible(false);

        this.orrientation = NONE;
    }

    dealCards(scene) { }

    foldCards(scene) {
        this.makeMessage(scene, "Fold", 0xeb4a5a);
        for(let card of [this.card1.card, this.card1.shadow, this.card2.card, this.card2.shadow]) {
            let endY = card.y + card.displayHeight;
            let playerObj = this;
            var tween = scene.tweens.add({
                targets: card,
                y: endY,
                alpha: 0.2,
                ease: 'linear',
                delay: 50,
                duration: 400,
                onComplete: function () {
                    playerObj.deleteCards();
                }
            });
        }
    }

    call(scene) {
        this.makeMessage(scene, "Call", 0xe6bc5a);
    }

    raise(scene) {
        this.makeMessage(scene, "Raise", 0x3c92c3);
    }

    makeMessage(scene, message, color) {
        let callMsg = scene.add.text(this.x, this.y, message, {
            fontFamily: 'Quicksand',
            fontSize: '36px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5)
            .setVisible(true)


        let padding= 12;
        let rw = callMsg.displayWidth + padding * 2;
        let rh = callMsg.displayHeight + padding;

        let bg = scene.add.image(this.x, this.y, "round_rect");
        bg.displayWidth = rw;
        bg.displayHeight = rh;
        bg.tint = color;

        var tween = scene.tweens.add({
            targets: [callMsg, bg],
            alpha: 0,
            ease: 'linear',
            delay: 1200,
            duration: 560,
            onComplete: function () {
                callMsg.destroy();
                bg.destroy();
            }
        });

        scene.children.bringToTop(callMsg);
    }

    updatePlayer(scene, player) {
        let name_str = player.id;
        let bb = player.bb;
        let hand = Array.from(player.hand.values())
        let isDealer = player.isDealer;
        let active = player.isTurn;

        this.active_user_sprite.setVisible(active);
        this.inactive_user_sprite.setVisible(!active);

        if (scene.state.running && !player.inRound) {
            this.inactive_user_sprite.alpha = 0.5;
        } else {
            this.inactive_user_sprite.alpha = 1;
        }

        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth * 0.75, this.y + 15)
            this.dealerChit.setVisible(true);
        }

        this.name.text = name_str;
        this.num_chips_label.setText(bb + " bb");

        let newOrrientation = this.y < this.screenCenterY ? BELOW : ABOVE;

        if (player.hand.length > 0 && this.oldPlayerState.hand.length == 0) {
            this.dealCards(scene);
        }
        // TODO: if in a round, a player does call -> fold -> call and the game moves to the next state, this logic doesn't work because the same player goes twice in a row
        if (!player.isTurn && this.oldPlayerState.isTurn) {
            if (player.lastAction === FOLD) {
                this.foldCards(scene);
            } else if (player.lastAction === CALL) {
                this.call(scene);
            } else if (player.lastAction === RAISE) {
                this.raise(scene);
            }
        }

        if (hand.length > 1 && player.inRound && JSON.stringify(player.hand) !== JSON.stringify(this.oldPlayerState.hand) ||
            player.shouldShowHand != this.oldPlayerState.shouldShowHand) {
            this.deleteCards();
            this.drawCards(scene, player);
        }

        // Move the chips above or below the player
        // if the orrientation has changed
        if (newOrrientation != this.orrientation) {
            let deltaY = 40;
            if (newOrrientation == ABOVE) {
                deltaY *= -1;
            }
            if (this.orrientation != NONE) {
                deltaY *= 2;
            }
            this.orrientation = newOrrientation;

            for (let i = 0; i < this.chips.length; i++) {
                this.chips[i].y += deltaY
            }
            this.chip_label.y += deltaY;
        }

        for (let i = 0; i < this.chips.length; i++) {
            this.chips[i].setVisible(scene.state.running);
        }
        this.chip_label.setVisible(scene.state.running);
        this.chip_label.text = player.currentBet + ' BB'

        this.oldPlayerState = player;
    }

    setNewPlayer(scene, player) {
        let name_str = player.id;
        let bb = player.bb;
        let hand = Array.from(player.hand.values())
        let isDealer = player.isDealer;
        let active = player.isTurn;

        this.active_user_sprite.setVisible(active);
        this.inactive_user_sprite.setVisible(!active);

        if (scene.state.running && !player.inRound) {
            this.inactive_user_sprite.alpha = 0.5;
        } else {
            this.inactive_user_sprite.alpha = 1;
        }

        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth * 0.75, this.y + 15)
            this.dealerChit.setVisible(true);
        }

        this.name.text = name_str;
        this.num_chips_label.setText(bb + " bb");

        this.deleteCards();

        let newOrrientation = this.y < this.screenCenterY ? BELOW : ABOVE;

        if (hand.length > 1 && player.inRound) {
            this.drawCards(scene, player);
        }

        // Move the chips above or below the player
        // if the orrientation has changed
        if (newOrrientation != this.orrientation) {
            let deltaY = 40;
            if (newOrrientation == ABOVE) {
                deltaY *= -1;
            }
            if (this.orrientation != NONE) {
                deltaY *= 2;
            }
            this.orrientation = newOrrientation;

            for (let i = 0; i < this.chips.length; i++) {
                this.chips[i].y += deltaY
            }
            this.chip_label.y += deltaY;
        }

        for (let i = 0; i < this.chips.length; i++) {
            this.chips[i].setVisible(scene.state.running);
        }
        this.chip_label.setVisible(scene.state.running);
        this.chip_label.text = player.currentBet + ' BB'

        this.oldPlayerState = player;
    }

    drawCards(scene, player) {
        if (player.id == scene.userId || player.shouldShowHand) {
            this.card1 = new CardSprite(scene, player.hand[0].suit, player.hand[0].value)
            this.card2 = new CardSprite(scene, player.hand[1].suit, player.hand[1].value)
        } else {
            this.card1 = new CardBackSprite(scene);
            this.card2 = new CardBackSprite(scene);
        }

        // Scale the card to 80% of the user sprite height
        let scaleFactor =  this.active_user_sprite.displayHeight / this.card1.card.displayHeight;
        this.card1.setScale(scaleFactor * this.card1.card.scale * 0.75);
        this.card2.setScale(scaleFactor * this.card2.card.scale * 0.75);

        this.add(this.card1);
        this.add(this.card2);
        
        // Calculate the y of the card so that a non-rotated card would be exactly at
        // the bottom of the user sprite
        let y = this.active_user_sprite.displayHeight * 0.5 - this.card1.card.displayHeight * 0.4
        this.card1.setPosition(this.card1.card.width * this.card1.card.scale * 0.35, y);
        this.card2.setPosition(-this.card1.card.width * this.card1.card.scale * 0.35, y);

        this.card1.setAngle(3);
        this.card2.setAngle(-3);

        this.bringToTop(this.card2);
        this.bringToTop(this.card1);

        // Add card mask
        for(let card of [this.card1, this.card2]) {
            let cardMask = scene.add.rectangle(this.x -this.active_user_sprite.displayWidth, this.y + this.active_user_sprite.displayHeight/2, this.active_user_sprite.displayWidth * 2, 100, 0x000000).setOrigin(0).setVisible(false);
            let mask = new Phaser.Display.Masks.BitmapMask(scene, cardMask)
            card.card.mask = mask;
            card.shadow.mask = mask;
            mask.invertAlpha = true;
        }
    }

    deleteCards() {
        // TODO: this deletion code crashes things when the screen is resized
        if (this.card1 != null) {
            this.card1.destroy();
        }
        if (this.card2 != null) {
            this.card2.destroy();
        }
    }
}
