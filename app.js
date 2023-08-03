const convertBtn = document.querySelector('#convert-btn');
const showResult = document.querySelector('#result');

let result = '';
function convert() {
  const inputBox = document.querySelector('#input-box').value;
  const degreeValue = document.querySelector('#degree').value;
  console.log(degreeValue);
  if (inputBox === '' || inputBox === null) {
    alert('you must enter a number');
    return;
  }

  if (degreeValue === 'celsius') {
    result = (inputBox - 32) * (5 / 9);
    result = result.toFixed(2);
    result += ` Celsius`;
    showResult.innerHTML = result;
  }

  if (degreeValue === 'fahrenheit') {
    result = inputBox * (9 / 5) + 32;
    result = result.toFixed(2);
    result += ` Fahrenheit`;
    showResult.innerHTML = result;
  }
}
convertBtn.addEventListener('click', convert);
