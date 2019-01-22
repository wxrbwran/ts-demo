"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Koa from 'Koa';
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./UserController");
var app = routing_controllers_1.createKoaServer({
    controllers: [UserController_1.UserController] // we specify controllers we want to use
});
app.listen(6666);
