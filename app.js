"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        //setting
        app.set("view engine", "ejs");
        app.set('views', __dirname + '/src/views');
        app.use(express.static("public"));
        this.handleRouter(app);
        this.listen(app);
    }
    App.prototype.handleRouter = function (app) {
        app.get("/", function (req, res) {
            res.render("index/index.ejs");
        });
        // let indexRouter:IndexRouter = new IndexRouter();
        // app.use("/", indexRouter.getRouter());
    };
    App.prototype.listen = function (app) {
        var port = 3000;
        app.listen(port, '0.0.0.0', function () {
            console.log("Server Started");
        });
    };
    return App;
}());
new App();
