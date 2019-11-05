let numOne = document.getElementById('numOne');
let numTwo = document.getElementById('numTwo');


// document.getElementById("plus").addEventListener("click", function(){
    
//     let lygu = sum (numOne.value, numTwo.value);
//     alert(lygu)
// });
  
// function sum (numOne, numTwo) {
//     return Number(numOne) + Number(numTwo);
// }

// document.getElementById("minus").addEventListener("click", function(){
//     alert(Number(numOne.value) - Number(numTwo.value))
// });

// document.getElementById("divide").addEventListener("click", function(){
//     alert(Number(numOne.value) / Number(numTwo.value))
// });

// document.getElementById("multiply").addEventListener("click", () => {
//     alert(mult(numOne, numTwo));
// });

// const mult = (numOne, numTwo) => Number(numOne.value) * Number(numTwo.value);

// document.getElementById("modulus").addEventListener("click", function(){
//     alert(Number(numOne.value) % Number(numTwo.value))
// });

document.getElementById("clear").addEventListener("click", function(){
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
});

let elementsArray = document.querySelectorAll('button');

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        switch(e.target.id) {
            case "plus":
                document.getElementById("result").textContent = (Number(numOne.value) + Number(numTwo.value));
              break;
            case "minus":
                document.getElementById("result").textContent = (Number(numOne.value) - Number(numTwo.value));
              break;
            case "divide":
                document.getElementById("result").textContent = (Number(numOne.value) / Number(numTwo.value));
              break;
            case "multiply":
                document.getElementById("result").textContent = (Number(numOne.value) * Number(numTwo.value));
              break;
            case "modulus":
                document.getElementById("result").textContent = (Number(numOne.value) % Number(numTwo.value));
              break;
            default:
          }
    });
});

