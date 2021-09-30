const bAmount = document.querySelector('#bill-amount');

const cReceived = document.querySelector('#money-received');

const changeBtn = document.querySelector('#changebtn');

const output = document.querySelector('#error-msg');

const moneyWeHave = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const noOfChange = document.querySelectorAll('.no-of-change');

changeBtn.addEventListener('click', check);
function showMsg(str){
    output.style.display = 'block'
    output.innerText = str;
}

function check(){
    output.style.display = 'none';
    if(bAmount.value > 0){
        if(Number(cReceived.value) >= Number(bAmount.value)){
            const returnChange = (cReceived.value - bAmount.value);
            calChangeReturn(returnChange);
        }else{
            showMsg('The given cash should be equal to the bill amount');
        }
    }else{
         showMsg("ENTER PROPER BILL AMOUNT");
    }
};

function calChangeReturn(returnChange){
    for(let i=0; i<moneyWeHave.length; i++){
        const changeToProvide = Math.trunc(returnChange/moneyWeHave[i]);
    
        returnChange = returnChange % moneyWeHave[i];
        noOfChange[i].innerText = changeToProvide;
    };    
}
