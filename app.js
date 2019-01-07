"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        app.use(express.static("public"));
    }
    App.prototype.listen = function (app) {
        var port = 3000;
        app.listen(port, function () {
            console.log("Server Started");
        });
    };
    return App;
}());
new App();
