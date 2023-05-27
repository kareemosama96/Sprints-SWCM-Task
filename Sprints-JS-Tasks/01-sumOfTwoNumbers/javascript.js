document.getElementById("btn").addEventListener("click",addAndAlert);
function addAndAlert(){
    let firstNumber = document.getElementById("number1").value;
    let secondNumber = document.getElementById("number2").value;
    let sum = parseInt(firstNumber)+parseInt(secondNumber);
    //another way
    // let sum = Number(firstNumber)+Number(secondNumber);


    //result in the console log
    console.log(sum);

    //result in the div HTML
    document.getElementById('result').innerHTML = `<h2> ${sum} </h2>`;

    //result in an alert 
    alert("The result is: "+ sum);
}
