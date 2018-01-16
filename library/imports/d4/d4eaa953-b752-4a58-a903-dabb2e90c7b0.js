"use strict";
cc._RF.push(module, 'd4eaalTt1JKWKkD2rsukMew', 'CarregarCena');
// Scripts/CarregarCena.js

"use strict";

cc.Class({
    extends: cc.Component,

    carregarCenaComAnimacao: function carregarCenaComAnimacao(nomeDaCena) {
        cc.director.loadScene(nomeDaCena);
    }
});

cc._RF.pop();