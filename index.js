const input = document.getElementById('input');
const labels = document.getElementById('labels');
const buttonDiv = document.getElementById('buttons');
let tabData;
let tracker = 0;

function data() {
    let labelTitles = labels.value;
    let rowOrCol = document.getElementById('row-or-col').value;
    if (rowOrCol == "col") {
        console.log("col");
        labelData = labelTitles.split('\n')
    } else {
        console.log("row");
        labelData = labelTitles.split('\t')
    }

    labelData = labelData.filter(labelTitles => labelTitles.trim() != '');
        
    // for (cell in labelData) {
    //     console.log(labelData[cell]);
    //     const heading = document.createElement('h4');
    //     const br = document.createElement('br');
    //     heading.innerHTML = labelData[cell];
    //     buttonDiv.append(heading, br);
    // }
    
    let data = input.value;
    if (rowOrCol == "col") {
        console.log("col");
        tabData = data.split('\n')
    } else {
        console.log("row");
        tabData = data.split('\t')
    }

    tabData = tabData.filter(data => data.trim() != '');

    
    for (cell in tabData, labelData) {
        console.log(tabData[cell]);
        const heading = document.createElement('h4');
        const br = document.createElement('br');
        heading.innerHTML = labelData[cell];
        const paster = document.createElement('textarea');
        const clicker = document.createElement('button');
        clicker.innerHTML = "COPY";
        clicker.addEventListener("click", myScript);
        paster.innerHTML = tabData[cell];

        buttonDiv.append(heading, paster, br, clicker, br);
    }
    tracker = 0;
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

function next() {
    if (tracker == 0) {
        console.log(tabData[tracker]);
        navigator.clipboard.writeText(tabData[tracker]);
    } else {
        console.log(tabData[tracker]);
        navigator.clipboard.writeText(tabData[tracker]);
    }
    tracker++
}
