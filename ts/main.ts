
// import { BackgroundService} from './BackgroundService';
// import {allBackgroundsX} from "./backgroundsArray";

let theBackground = new BackgroundService();
// @ts-ignore
let allURL = new BTabService();

function drawPage(): void{

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
    // @ts-ignore
    document.getElementById('bTabList').innerHTML = '';
    for(let i: number = 0; i < urlList.length; i++){
        // @ts-ignore
        document.getElementById('bTabList').innerHTML += `<li id="url${urlList[i].id}"><i onclick="allURL.removeUrl(${urlList[i].id})" class="fas fa-trash-alt"></i><a href="${urlList[i].url}">${urlList[i].name}</a></li>`;
    }
}

drawPage();
