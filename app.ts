let arr:Array<string> = ["Classificação", "< 18.5 == Abaixo do Peso", "18.5 - 24.9 == Peso Normal", "25 - 29.9 == Sobrepeso", "30 - 39.9 == Obesidade", "> 39.9 == Obesidade Mórbida"]

function imc(peso:number, altura:number):string {
    let imc:number = peso / (altura*altura)
    console.table(arr)
    return `Seu IMC é de ${imc.toFixed(2)}`
}

console.log(imc(80, 1.83))
