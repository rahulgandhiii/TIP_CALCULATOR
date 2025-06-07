const options = document.querySelector('.predetermined');
const customBtn = document.getElementById('custom');
const preDeterminedBtn = document.getElementById('predetermined');
const custom = document.querySelector('.customtip');
const customTipElement = document.getElementById('tippercent');
const inputElement = document.getElementById('billamount');

function tipOptions(){
    options.style.display = "block";
    customBtn.style.display = 'none';
    custom.style.display = 'none';
}

function customTip(){
    customBtn.style.display = 'block';
    preDeterminedBtn.style.display = 'none';
    custom.style.display = 'flex';
    custom.style.justifyContent = 'center';
    custom.style.alignItems = 'center';
    custom.style.flexDirection = 'column';
}

function tenPercentTip(){
    const amount = inputElement.value;
    const tip = Number(amount)*0.1;
    const final = Number(amount)+tip;
    document.getElementById('final').textContent = `You should pay ${final}.`;
}

function fifteenPercentTip(){
    const amount = inputElement.value;
    const tip = Number(amount)*0.15;
    const final = Number(amount)+tip;
    document.getElementById('final').textContent = `You should pay ${final}.`;
}

function twentyPercentTip(){
    const amount = inputElement.value;
    const tip = Number(amount)*0.2;
    const final = Number(amount)+tip;
    document.getElementById('final').textContent = `You should pay ${final}.`;
}

function calculateCustomTip(){
    const amount = inputElement.value;
    const tipRatio = customTipElement.value;
    const tip = Number(amount)*(Number(tipRatio)/100);
    const final = Number(amount)+tip;
    document.getElementById('final').textContent = `You should pay ${final}.`;
}
