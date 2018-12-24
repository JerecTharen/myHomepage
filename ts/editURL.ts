
function initialEditUrl(id: number): void{
    // @ts-ignore
    document.getElementById('modalTitle').innerHTML = "Edit Browser Tab";
    // @ts-ignore
    document.getElementById('modalLabel').innerHTML = "Name of Website";
    // @ts-ignore
    document.getElementById('modalBtn').setAttribute('onclick', 'editName()');
    newURL.id = id;
    showModal();
}
function editName(): void{
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
        document.getElementById('modalTitle').innerHTML = "Edit Browser Tab";
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', '');
    }
    newURL.name = name;
    if(canContinue){
        // @ts-ignore
        document.getElementById('modalInput').value = '';
        // @ts-ignore
        document.getElementById('modalBtn').setAttribute('onclick', 'finishEdit()');
        // @ts-ignore
        document.getElementById('modalLabel').innerHTML = "URL of Website";
    }
}
function finishEdit(): void{
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
        document.getElementById('modalTitle').innerHTML = "Edit Browser Tab";
        // @ts-ignore
        document.getElementById('modalInput').setAttribute('class', '');
    }
    newURL.url = url;
    if(canContinue){
        // @ts-ignore
        document.getElementById('modalInput').value = '';
        allURL.editURL(newURL.id, newURL.name, newURL.url);
        setURLStorage();
        hideModal();
        drawPage();
    }
}
