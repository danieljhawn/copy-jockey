const input = document.getElementById('input');
const buttonDiv = document.getElementById('buttons'); 

function data() {
    let data = input.value;
    let rowOrCol = document.getElementById('row-or-col').value;
    let tabData;
    if (rowOrCol == "col") {
        console.log("col");
        tabData = data.split('\n')
    } else {
        console.log("row");
        tabData = data.split('\t')
    }

    tabData = tabData.filter(data => data.trim() != '');
    // console.log(tabData);
    for (cell in tabData) {
        console.log(tabData[cell]);
        const paster = document.createElement('textarea');
        const clicker = document.createElement('button');
        clicker.innerHTML = "COPY";
        clicker.addEventListener("click", myScript);
        const br = document.createElement('br');
        paster.innerHTML = tabData[cell];
        buttonDiv.append(paster, clicker, br);
    }
}

function myScript() {
    console.log(this.previousElementSibling.textContent);
    navigator.clipboard.writeText(this.previousElementSibling.textContent);
}

function clearButtons() {
    buttonDiv.innerHTML = '';
}
function clearTextArea() {
    input.value = '';
}