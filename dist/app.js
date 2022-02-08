"use strict";
let arr = ["Classificação", "< 18.5 == Abaixo do Peso", "18.5 - 24.9 == Peso Normal", "25 - 29.9 == Sobrepeso", "30 - 39.9 == Obesidade", "> 39.9 == Obesidade Mórbida"];
function imc(peso, altura) {
    let imc = peso / (altura * altura);
    console.table(arr);
    return `Seu IMC é de ${imc.toFixed(2)}`;
}
console.log(imc(80, 1.83));
//# sourceMappingURL=app.js.map