
function hideMain(): void{
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'none';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = "block";
}

function showMain(): void{
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'block';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = 'none';
}

function showModal(): void{
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'none';
    // @ts-ignore
    document.getElementById('modalSpace').style.display = 'block';
}

function hideModal(): void{
    // @ts-ignore
    document.getElementById('modalSpace').style.display = 'none';
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'block';
    drawPage();
}
