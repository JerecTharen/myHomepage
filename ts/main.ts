
// import { BackgroundService} from './BackgroundService';
// import {allBackgroundsX} from "./backgroundsArray";

let theBackground = new BackgroundService();
// @ts-ignore
let allURL = new BTabService();
let newURL: URLInterface = {
    name: '',
    id: -1,
    url: ''
};

function drawPage(): void{
    //get urls out of storage
    if(window.localStorage.urls !== undefined){
        retrieveURLStorage();
    }
    //get backgrounds out of storage
    if(window.localStorage.backgrounds){
        retrieveBackgroundStorage();
    }
    //background draw
    theBackground = theBackground.refreshBackground();
    for(let y: number = 0; y < allBackgrounds.length; y++){
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
    if(allURL.getUrls().length !== 0){
        // @ts-ignore
        document.getElementById('bTabList').innerHTML = '';
        for(let i: number = 0; i < urlList.length; i++){
            // @ts-ignore
            document.getElementById('bTabList').innerHTML += `<li id="url${urlList[i].id}"><span class="tabListElement"><i onclick="removeURL(${urlList[i].id})" class="bIcon fas fa-trash-alt"></i></span><span class="tabListElement"><i onclick="initialEditUrl(${urlList[i].id})" class="fas fa-edit bIcon"></i></span><span class="tabListElement"><a target="_blank" href="${urlList[i].url}">${urlList[i].name}</a></span></li>`;
        }
    }
    else{
        // @ts-ignore
        document.getElementById('bTabList').innerHTML = '<li>No browser tabs saved</li>';
    }
}

drawPage();
