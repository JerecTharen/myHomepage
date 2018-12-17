"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundService = /** @class */ (function () {
    function BackgroundService() {
        this.backgrounds = [];
        this.theDate = new Date();
        this.theHour = this.theDate.getHours();
        this.theDay = this.theDate.getDay() + 1;
        // this.theMinute = this.theDate.getMinutes();
        this.timeInterval = 168 / this.backgrounds.length;
        this.currentInterval = Math.floor(((this.theDay - 1) * 24 + this.theHour + 1) / this.timeInterval);
        this.currentBackground = this.backgrounds[this.currentInterval];
    }
    BackgroundService.prototype.addBackground = function (url) {
        this.backgrounds.push(url);
    };
    BackgroundService.prototype.getBackground = function () {
        return this.currentBackground;
    };
    BackgroundService.prototype.refreshBackground = function () {
        return new BackgroundService();
    };
    return BackgroundService;
}());
exports.BackgroundService = BackgroundService;
