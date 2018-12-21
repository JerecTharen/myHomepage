
// import { BackgroundService} from './BackgroundService';
// import {allBackgroundsX} from "./backgroundsArray";

let theBackground = new BackgroundService();

function drawPage(): void{

    theBackground = theBackground.refreshBackground();
    for(let y: number = 0; y < allBackgrounds.length; y++){
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
