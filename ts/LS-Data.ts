
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
