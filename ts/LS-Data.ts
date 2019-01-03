///<reference path="backgroundsArray.ts"/>

function setURLStorage():void{
    let data: LSData = {
        nextID: allURL.getNextID(),
        data: allURL.getUrls()
    };
    // window.localStorage.setItem('urls', JSON.stringify(data));
    window.localStorage.urls = JSON.stringify(data);
}

function retrieveURLStorage():void{
    let data: LSData = JSON.parse(window.localStorage.urls);
    allURL.setAll(data.nextID, data.data);
}

if(!window.localStorage.backgrounds){
    let theData: string[] = [];
    for(let i: number = 0; i < allBackgrounds.length; i++){
        theData.push(allBackgrounds[i]);
    }
    window.localStorage.backgrounds = JSON.stringify(theData);
}
function setBackgroundsStorage(data: string[]): void{
    window.localStorage.backgrounds = JSON.stringify(data);
}

function retrieveBackgroundStorage(): void{
    allBackgrounds = JSON.parse(window.localStorage.backgrounds);
}
