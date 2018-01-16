(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/CarregarCena.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd4eaalTt1JKWKkD2rsukMew', 'CarregarCena', __filename);
// Scripts/CarregarCena.js

"use strict";

cc.Class({
    extends: cc.Component,

    carregarCenaComAnimacao: function carregarCenaComAnimacao(nomeDaCena) {
        cc.director.loadScene(nomeDaCena);
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
        //# sourceMappingURL=CarregarCena.js.map
        