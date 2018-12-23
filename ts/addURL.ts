
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
    // @ts-ignore
    let name: string = document.getElementById('modalInput').value;
    if (name === ''){
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
function addUrl(): void{
    // @ts-ignore
    let url: string = document.getElementById('modalInput').value;
    if (url === ''){
        alert('You must enter a URL');
    }
    newURL.url = url;
    // @ts-ignore
    document.getElementById('modalInput').value = '';
    allURL.addUrl(newURL.name, newURL.url);
    hideModal();
    drawPage();
}
