
function hide(): void{
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'none';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = "block";
}

function show(): void{
    // @ts-ignore
    document.getElementById('containsAll').style.display = 'block';
    // @ts-ignore
    document.getElementById('hiddenControl').style.display = 'none';
}
