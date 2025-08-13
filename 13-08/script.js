let weight = parseFloat(prompt("Digite seu peso"))
let height = parseFloat(prompt("Digite sua altura"))
let imc = weight / ( height * height)



function BMIcalculator(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "invalid values!";
    }

    let bmi = weight / (height * height);
    return bmi.toFixed(2);

}

function classificarIMC(bmi) {
    if (bmi < 18.5) return "abaixo"
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    if (bmi < 35) return "Obesity grade I";
    if (bmi < 40) return "Obesity grade II";
    if (bmi < 50) return "Obesity grade III";
}

alert(imc)

// Lívia 
// vívian

