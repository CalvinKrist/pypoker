import Phaser from "./phaser.min.js";

export class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y, text, callback) {
        super(scene, x, y);
        scene.children.add(this);

        this.bgColor = 0x000000;
        this.bgMouseOverColor = 0x000000;
        this.fontColor = "#fff";
        this.fontMouseOverColor = "#f39c12";

        let tmp = this;
        this.button = scene.add.text(0, 0, text, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: tmp.fontColor,
            align: 'center'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => {
                tmp.button.setStyle({ fill: tmp.fontMouseOverColor });
                tmp.bg.tint = tmp.bgMouseOverColor;
            })
            .on('pointerout', () => {
                tmp.button.setStyle({ fill: tmp.fontColor });
                tmp.bg.tint = tmp.bgColor;
            })
            .on('pointerdown', callback);

        this.bg = scene.add.image(0, 0, "round_rect");

        this.bg.tint = this.bgColor;

        this.add(this.button);
        this.add(this.bg);
        this.bringToTop(this.button);

        this.resize();
    }

    setBgColor(color) {
        this.bg.tint = color;
        this.bgColor = color;
    }

    setBgMouseOverColor(color) {
        this.bgMouseOverColor = color;
    }

    setFontColor(color) {
        this.button.setStyle({ fill: color });
        this.fontColor = color;
    }

    setFontMouseOverColor(color) {
        this.fontMouseOverColor = color;
    }

    set(property, value) {
        this.button[property] = value;
        this.bg[property] = value;
    }

    setText(text) {
        this.button.setText(text);
        this.resize();
    }

    resize() {
        let y_pad = 12;
        let x_pad = 12;
        let rw = this.button.displayWidth + x_pad * 2; // double padding for top and bottom
        if(rw < 110) {
            x_pad = (110 - this.button.displayWidth) / 2;
            rw = this.button.displayWidth + x_pad * 2;
        }
        let rh = this.button.displayHeight + y_pad * 2;

        this.bg.displayWidth = rw;
        this.bg.displayHeight = rh;

        // increase it by 1.3x so the button hitbox is slightly bigger than the visual hitbox
        this.button.setPadding(x_pad * 1.3, y_pad * 1.3); 

        this.width = this.button.width;
        this.height = this.button.height;
        this.displayWidth = this.button.displayWidth;
        this.displayHeight = this.button.displayHeight;
    }

    on(label, functor) {
        this.button.on(label, functor);
    }
}
