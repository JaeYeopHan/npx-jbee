"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var jbee_1 = require("./jbee");
var cli = {
    run: function () {
        ink_1.render(react_1.default.createElement(jbee_1.Jbee));
    },
};
module.exports = cli;
