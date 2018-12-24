"use strict";
class BTabService {
    constructor() {
        this.urlList = [];
        this.nextID = 0;
    }
    getUrls() {
        // let result: string[] = [];
        // for (let i: number = 0; i < this.urlList.length; i++){
        //     result.push(this.urlList[i].url);
        // }
        // return result;
        return this.urlList;
    }
    addUrl(name, url) {
        let newUrl = {
            name: name,
            url: url,
            id: this.nextID
        };
        this.nextID++;
        this.urlList.push(newUrl);
    }
    removeUrl(id) {
        let result;
        for (let i = 0; i < this.urlList.length; i++) {
            if (this.urlList[i].id === id) {
                result = this.urlList[i];
                this.urlList.splice(i, 1);
                return result;
            }
        }
        return undefined;
    }
    setNextID(nextID) {
        this.nextID = nextID;
    }
    editURL(id, name, url) {
        let result = false;
        for (let i = 0; i < this.urlList.length; i++) {
            if (this.urlList[i].id === id) {
                this.urlList[i].name = name;
                this.urlList[i].url = url;
                result = true;
            }
        }
        return result;
    }
}
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
function initialAddUrl() {
    // @ts-ignore
    document.getElementById('modalTitle').innerHTML = "Add Browser Tab";
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "Name of Website";
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'addName()');
    showModal();
}
function addName() {
    // @ts-ignore
    let name = document.getElementById('modalInput').value;
    if (name === '') {
        alert('You must enter a name');
    }
    newURL.name = name;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'addUrl()');
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "URL of Website";
}
function addUrl() {
    // @ts-ignore
    let url = document.getElementById('modalInput').value;
    if (url === '') {
        alert('You must enter a URL');
    }
    newURL.url = url;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    allURL.addUrl(newURL.name, newURL.url);
    hideModal();
    drawPage();
}
let allBackgrounds = [];
for (let i = 1; i < 61; i++) {
    allBackgrounds.push(`./images-fonts/background${i}.jpg`);
}
function initialEditUrl(id) {
    // @ts-ignore
    document.getElementById('modalTitle').innerHTML = "Edit Browser Tab";
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "Name of Website";
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'editName()');
    newURL.id = id;
    showModal();
}
function editName() {
    // @ts-ignore
    let name = document.getElementById('modalInput').value;
    if (name === '') {
        alert('You must enter a name');
    }
    newURL.name = name;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'finishEdit()');
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "URL of Website";
}
function finishEdit() {
    // @ts-ignore
    let url = document.getElementById('modalInput').value;
    if (url === '') {
        alert('You must enter a URL');
    }
    newURL.url = url;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    allURL.editURL(newURL.id, newURL.name, newURL.url);
    hideModal();
    drawPage();
}
// import { BackgroundService} from './BackgroundService';
// import {allBackgroundsX} from "./backgroundsArray";
let theBackground = new BackgroundService();
// @ts-ignore
let allURL = new BTabService();
let newURL = {
    name: '',
    id: -1,
    url: ''
};
function drawPage() {
    //background draw
    theBackground = theBackground.refreshBackground();
    for (let y = 0; y < allBackgrounds.length; y++) {
        // @ts-ignore
        theBackground.addBackground(allBackgrounds[y]);
        document.getElementsByTagName('body')[0].style.backgroundImage = `url('${theBackground.getBackground()}')`;
    }
    let urlList = allURL.getUrls();
    let dateInfo = theBackground.printInfo();
    // @ts-ignore
    document.getElementById('date').innerHTML = `Date: ${dateInfo.date}`;
    // @ts-ignore
    document.getElementById('picNum').innerHTML = `This background is number: ${dateInfo.picNum}`;
    // URL List Draw
    if (allURL.getUrls().length !== 0) {
        // @ts-ignore
        document.getElementById('bTabList').innerHTML = '';
        for (let i = 0; i < urlList.length; i++) {
            // @ts-ignore
            document.getElementById('bTabList').innerHTML += `<li id="url${urlList[i].id}"><span class="tabListElement"><i onclick="removeURL(${urlList[i].id})" class="fas fa-trash-alt"></i></span><span class="tabListElement"><i onclick="initialEditUrl(${urlList[i].id})" class="fas fa-edit"></i></span><span class="tabListElement"><a target="_blank" href="${urlList[i].url}">${urlList[i].name}</a></span></li>`;
        }
    }
    else {
        // @ts-ignore
        document.getElementById('bTabList').innerHTML = '<li>No browser tabs saved</li>';
    }
}
drawPage();
function removeURL(id) {
    allURL.removeUrl(id);
    drawPage();
}
function hideMain() {
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'none';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = "block";
}
function showMain() {
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'block';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = 'none';
}
function showModal() {
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'none';
    // @ts-ignore
    document.getElementById('modalSpace').style.display = 'block';
}
function hideModal() {
    // @ts-ignore
    document.getElementById('modalSpace').style.display = 'none';
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'block';
    drawPage();
}
