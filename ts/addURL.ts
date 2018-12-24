
function initialAddUrl(): void{
    // @ts-ignore
    document.getElementById('modalTitle').innerHTML = "Add Browser Tab";
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "Name of Website";
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'addName()');
    showModal();
}
function addName(): void{
    let canContinue: boolean = false;
    // @ts-ignore
    let name: string = document.getElementById('modalInput').value;
    if (name === ''){
        // @ts-ignore
        document.getElementById('modalTitle').innerHTML = "You must enter a name";
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', 'danger');
    }
    else{
        canContinue = true;
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', '');
        // @ts-ignore
        document.getElementById('modalTitle').innerHTML = "Add Browser Tab";
    }
    newURL.name = name;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    if(canContinue){
        // @ts-ignore
        document.getElementById('modalBtn').setAttribute('onclick', 'addUrl()');
        // @ts-ignore
        document.getElementById('modalLabel').innerHTML = "URL of Website";
    }
}
function addUrl(): void{
    let canContinue: boolean = false;
    // @ts-ignore
    let url: string = document.getElementById('modalInput').value;
    if (url === ''){
        // @ts-ignore
        document.getElementById('modalTitle').innerHTML = "You must enter a URL";
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', 'danger');
    }
    else{
        canContinue = true;
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', '');
        // @ts-ignore
        document.getElementById('modalTitle').innerHTML = "Add Browser Tab";
    }
    newURL.url = url;
    if(canContinue){
        // @ts-ignore
        document.getElementById('modalInput').value = '';
        allURL.addUrl(newURL.name, newURL.url);
        hideModal();
        drawPage();
    }
}
