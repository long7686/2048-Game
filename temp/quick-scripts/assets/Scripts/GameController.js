(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a7659krD65MCYDZjg5QURlp', 'GameController', __filename);
// Scripts/GameController.js

"use strict";

var Emitter = require("EventListener");
cc.Class({
    extends: cc.Component,

    properties: {
        //blockWidth = 75;
        //pad = 25
        tilePre: cc.Prefab,
        _arrSlot: [],
        cloneNode: cc.Node,
        _isStartGame: true
    },

    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this._isStartGame = true;
        this.createSlot();
        this.randomTile();
    },
    onKeyDown: function onKeyDown(event) {
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
    createSlot: function createSlot() {
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                var tile = cc.instantiate(this.cloneNode);
                tile.parent = this.node;
                tile.position = cc.v2(this.node.x - i * 100, this.node.y - j * 100);
                this._arrSlot.push(tile);
            }
        }
    },
    randomTile: function randomTile() {
        if (this._isStartGame) {
            var pos1 = Math.floor(Math.random() * this._arrSlot.length);
            var pos2 = Math.floor(Math.random() * this._arrSlot.length);

            var tile1 = cc.instantiate(this.tilePre);
            tile1.parent = this.node;
            tile1.position = this._arrSlot[pos1].position;

            var tile2 = cc.instantiate(this.tilePre);
            tile2.parent = this.node;
            tile2.position = this._arrSlot[pos2].position;

            this._isStartGame = false;
        } else {
            // ramdom 1 tile
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameController.js.map
        