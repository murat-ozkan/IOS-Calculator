let table = document.getElementById("table");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");



const getData = (e) => {
    let value = e.target.innerText;
    if(!isNaN(value)) {
        result1.innerText += value
    } else {
        if(value === '+' && result2.innerText === '') {
            result1.innerText += "+" 
            result2.innerText = result1.innerText;
            result1.innerText = ''
        } else if(value === '-' && result2.innerText === '') {
            result1.innerText += '-';
            result2.innerText = result1.innerText;
            result1.innerText = ''
        } else if(value === 'x' && result2.innerText === '') {
            result1.innerText += 'x';
            result2.innerText = result1.innerText;
            result1.innerText = ''
        } else if(value === '÷' && result2.innerText === '') {
            result1.innerText += '÷';
            result2.innerText = result1.innerText;
            result1.innerText = ''
        } else if (value === ".") {
            if(result1.innerText !== '' && result1.innerText !== '0.' && !result1.innerText.includes('.')) {
                result1.innerText += '.'
            } 
            else if(result1.innerText !== '' && result1.innerText !== '0.' && result1.innerText.includes('.') ){
            }
             else {
                result1.innerText = '0.'
            }
        } else if(value === "AC") {
            result1.innerText = '';
            result2.innerText = '';
        } else if (value === "=") {
            let str = result2.innerText
            let işlem = str[str.length - 1]
            if(işlem === "+") {
                result1.innerText = parseFloat(result2.innerText) + parseFloat(result1.innerText);
                result2.innerText = "";
            } else if(işlem === "-") {
                result1.innerText = parseFloat(result2.innerText) - parseFloat(result1.innerText);
                result2.innerText = "";
            } else if(işlem === "x") {
                result1.innerText = parseFloat(result2.innerText) * parseFloat(result1.innerText);
                result2.innerText = "";
            } else if(işlem === "÷") {
                result1.innerText = parseFloat(result2.innerText) / parseFloat(result1.innerText);
                result2.innerText = "";
            }
            
        } else if(value === "%") {
            result1.innerText = parseFloat(result1.innerText) * 0.01
        } else if(value === "C") {
            result1.innerText =  result1.innerText.slice(0, -1);
        }
    }
}

table.addEventListener("click", getData)