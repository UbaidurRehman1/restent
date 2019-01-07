"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        //setting
        app.set("view engine", "ejs");
        app.use(express.static("public"));
        this.handleRouter(app);
        this.listen(app);
    }
    App.prototype.handleRouter = function (app) {
        app.get("/", function (req, res) {
            res.send("Fucking index page");
        });
        // let indexRouter:IndexRouter = new IndexRouter();
        // app.use("/", indexRouter.getRouter());
    };
    App.prototype.listen = function (app) {
        var port = 8080;
        app.listen(port, function () {
            console.log("Server Started");
        });
    };
    return App;
}());
new App();
