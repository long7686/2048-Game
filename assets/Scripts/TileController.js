const Emitter = require("EventListener") 
cc.Class({
    extends: cc.Component,

    properties:{

    },

    onLoad(){
        let randomNumber = null;
        Math.random() <= 0.9 ? randomNumber = 2 : randomNumber = 4;
        this.node.getChildByName("Number").getComponent(cc.Label).string = randomNumber
        Emitter.instance.registerEvent("moveLeft", this.moveLeft.bind(this))
        Emitter.instance.registerEvent("moveRight", this.moveRight.bind(this))
        Emitter.instance.registerEvent("moveUp", this.moveUp.bind(this))
        Emitter.instance.registerEvent("moveDown", this.moveDown.bind(this))
        this.getStart()
    },

    moveLeft(){

    },

    moveRight(){

    },

    moveUp(){

    },

    moveDown(){

    },

    getStart(){
        this.node.scale = 0;
        cc.tween(this.node)
            .by(0.2,{scale:1})
            .start()
    }

})