import set = Reflect.set;

function removeURL(id: number): void{
    allURL.removeUrl(id);
    setURLStorage();
    drawPage();
}
