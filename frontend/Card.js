import Phaser from "./phaser.min.js";
import {gameOptions} from "./GameOptions"

class CardBase extends Phaser.GameObjects.Container {
    constructor(scene, card, shadow) {
        super(scene, 0, 0);
        scene.children.add(this);

        this.card = card;
        this.shadow = shadow;

        this.card.setOrigin(0.5);
        this.shadow.setOrigin(0.5);
        this.card.setPosition(0, 0);
        this.shadow.setPosition(0, 0);

        this.shadow.x = -3;
        this.shadow.y = 2;
        this.shadow.scale = this.card.scale;
        this.shadow.tint = 0x000000;
        this.shadow.alpha = 0.6;
        this.shadow.angle = this.card.angle;

        this.add(this.card);
        this.add(this.shadow);
        this.bringToTop(this.card);
    }

    setScale(s) {
        this.shadow.scale = s;
        this.card.scale = s;
    }
}

export class CardSprite extends CardBase {
    constructor(scene, suit, value) {
        super(scene, scene.createCard(suit, value), scene.createCard(suit, value));
    }
}

export class CardBackSprite extends CardBase {
    constructor(scene) {
        super(scene, scene.add.sprite(0, 0, "card_back").setScale(gameOptions.cardScale * 0.64), scene.add.sprite(0, 0, "card_back").setScale(gameOptions.cardScale * 0.64));
    }
}
