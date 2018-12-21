"use strict";
class BackgroundService {
    constructor() {
        this.backgrounds = [];
        this.theDate = new Date();
        this.theHour = this.theDate.getHours();
        this.theDay = this.theDate.getDay() + 1;
        // this.theMinute = this.theDate.getMinutes();
        this.timeInterval = 168 / this.backgrounds.length;
        this.currentInterval = Math.floor(((this.theDay - 1) * 24 + this.theHour + 1) / this.timeInterval);
        this.currentBackground = this.backgrounds[this.currentInterval];
    }
    addBackground(url) {
        this.backgrounds.push(url);
        this.reInit();
    }
    getBackground() {
        return this.currentBackground;
    }
    refreshBackground() {
        return new BackgroundService();
    }
    reInit() {
        this.theDate = new Date();
        this.theHour = this.theDate.getHours();
        this.theDay = this.theDate.getDay() + 1;
        this.timeInterval = 168 / this.backgrounds.length;
        this.currentInterval = Math.floor(((this.theDay - 1) * 24 + this.theHour + 1) / this.timeInterval);
        this.currentBackground = this.backgrounds[this.currentInterval];
    }
    printInfo() {
        let month = "";
        let weekday = "";
        let result = { date: "", picNum: 0 };
        switch (this.theDate.getMonth()) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        }
        switch (this.theDay) {
            case 1:
                weekday = "Sunday";
                break;
            case 2:
                weekday = "Monday";
                break;
            case 3:
                weekday = "Tuesday";
                break;
            case 4:
                weekday = "Wednesday";
                break;
            case 5:
                weekday = "Thursday";
                break;
            case 6:
                weekday = "Friday";
                break;
            case 7:
                weekday = "Saturday";
                break;
        }
        result.date = `${weekday} ${month} ${this.theDate.getDate()}. The hour is ${this.theHour + 1}`;
        result.picNum = this.currentInterval;
        return result;
    }
}
let allBackgrounds = [];
for (let i = 1; i < 61; i++) {
    allBackgrounds.push(`./images-fonts/background${i}.jpg`);
}
// import { BackgroundService} from './BackgroundService';
// import {allBackgroundsX} from "./backgroundsArray";
let theBackground = new BackgroundService();
function drawPage() {
    theBackground = theBackground.refreshBackground();
    for (let y = 0; y < allBackgrounds.length; y++) {
        // @ts-ignore
        theBackground.addBackground(allBackgrounds[y]);
        document.getElementsByTagName('body')[0].style.backgroundImage = `url('${theBackground.getBackground()}')`;
    }
    let dateInfo = theBackground.printInfo();
    // @ts-ignore
    document.getElementById('date').innerHTML = `Date: ${dateInfo.date}`;
    // @ts-ignore
    document.getElementById('picNum').innerHTML = `This background is number: ${dateInfo.picNum}`;
}
drawPage();
