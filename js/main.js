"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundService_1 = require("./BackgroundService");
var theBackground = new BackgroundService_1.BackgroundService();
document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + theBackground.getBackground() + "')";
