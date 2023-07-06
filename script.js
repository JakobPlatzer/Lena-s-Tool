function firstCalculation() {
    let result = document.getElementById("inputForm")[0].value;
    document.getElementById("result").innerHTML=`Your input is ${result}.`;
    console.log(result)
}

function mwst() {
    let input = Number(document.getElementById("inputForm")[0].value);
    let result = input * 0.2;
    let total = result + input;
    document.getElementById("result").innerHTML=`Die Mehrwertsteuer beträgt: ${result}€. <br> Der Gesamtbetrag beträgt: ${total}€.`;
    console.log(result)
}