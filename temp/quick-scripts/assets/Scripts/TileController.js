(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/TileController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '357f7H6t/lNUqQQEduT8ZbK', 'TileController', __filename);
// Scripts/TileController.js

"use strict";

var Emitter = require("EventListener");
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var randomNumber = null;
        Math.random() <= 0.9 ? randomNumber = 2 : randomNumber = 4;
        this.node.getChildByName("Number").getComponent(cc.Label).string = randomNumber;
        Emitter.instance.registerEvent("moveLeft", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("moveRight", this.moveRight.bind(this));
        Emitter.instance.registerEvent("moveUp", this.moveUp.bind(this));
        Emitter.instance.registerEvent("moveDown", this.moveDown.bind(this));
        this.getStart();
    },
    moveLeft: function moveLeft() {},
    moveRight: function moveRight() {},
    moveUp: function moveUp() {},
    moveDown: function moveDown() {},
    getStart: function getStart() {
        this.node.scale = 0;
        cc.tween(this.node).by(0.2, { scale: 1 }).start();
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
        //# sourceMappingURL=TileController.js.map
        