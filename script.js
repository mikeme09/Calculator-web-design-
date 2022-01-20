const display1 = document.querySelector('.display-1');
const mainDisplay= document.querySelector('.main-display');
const numberElement = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const lastEntryClear = document.querySelector('.lastEntryClear');
const allClear = document.querySelector('.allClear');
const dot = document.querySelector('.period');

let smallDisp = '';
let mainDisp = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberElement.forEach(number => {
   number.addEventListener('click', (element) => {
      if (element.target.innerText === '.' && !haveDot){
         haveDot = true;
      } else if (element.target.innerText === '.' && haveDot){
         return;
      }
      mainDisp += element.target.innerText;
      mainDisplay.innerText = mainDisp;
   });
});

operations.forEach(operation => {
   operation.addEventListener('click', (element) => {
      if(!mainDisp) return;
      haveDot = false;
      const operationName = element.target.innerText;
      if(mainDisp && smallDisp && lastOperation) {
         mathOperation();
      } else {
         result = parseFloat(mainDisp);
      }
      clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
   });
});

function clearVar(name = ''){
   smallDisp += mainDisp + ' ' + name + ' ';
   display1.innerText = smallDisp;
   mainDisplay.innerText = '';
   mainDisp = '';
}

function mathOperation(){
   if(lastOperation === 'x'){
      result = parseFloat(result) * parseFloat(mainDisp);
   } else if (lastOperation === '+') {
      result = parseFloat(result) + parseFloat(mainDisp);
   } else if (lastOperation === '-') {
      result = parseFloat(result) - parseFloat(mainDisp);
   } else if (lastOperation === '/') {
      result = parseFloat(result) / parseFloat(mainDisp);
   } else if (lastOperation === '%') {
      result = parseFloat(result) % parseFloat(mainDisp);
   }
}

equals.addEventListener('click', (element) => {
   if(!mainDisp || !smallDisp) return;
   haveDot = false;
   mathOperation();
   clearVar();
   mainDisplay.innerText = result;
})
