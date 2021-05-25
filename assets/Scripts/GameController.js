const Emitter = require("EventListener")
cc.Class({
    extends: cc.Component,

    properties: {
        //blockWidth = 75;
        //pad = 25
        tilePre : cc.Prefab,
        _arrSlot: [],
        cloneNode : cc.Node,
        _isStartGame: true,
    },


    onLoad() {
        Emitter.instance = new Emitter();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this._isStartGame = true;
        this.createSlot();
        this.randomTile();
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                Emitter.instance.emit("moveLeft");
                break;
            case cc.macro.KEY.right:
                Emitter.instance.emit("moveRight");
                break;
            case cc.macro.KEY.up:
                Emitter.instance.emit("moveUp");
                break;
            case cc.macro.KEY.down:
                Emitter.instance.emit("moveDown");
                break;
        }
    },

    createSlot(){
        for (let i = 0; i <= 3; i++){
            for (let j =0; j <= 3; j++){
                let tile = cc.instantiate(this.cloneNode);
                tile.parent = this.node;
                tile.position = cc.v2(this.node.x - (i*100),this.node.y - (j*100));
                this._arrSlot.push(tile);
            }
        }
    },  

    randomTile(){
        if(this._isStartGame){
            let pos1 = Math.floor(Math.random()* this._arrSlot.length)
            let pos2 = Math.floor(Math.random()* this._arrSlot.length)
            
            let tile1 = cc.instantiate(this.tilePre);
            tile1.parent = this.node;
            tile1.position = this._arrSlot[pos1].position

            let tile2 = cc.instantiate(this.tilePre);
            tile2.parent = this.node;
            tile2.position = this._arrSlot[pos2].position

            this._isStartGame = false;
        }
        else{
            // ramdom 1 tile
        } 
    }

});
