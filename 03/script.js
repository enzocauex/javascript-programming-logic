function mathOperator() {
    let numberOne = Number(prompt("Digite o primeiro número:"))
    let numberTwo = Number(prompt("Digite o segundo número:"))

    const sum = numberOne + numberTwo
    const sub = numberOne - numberTwo
    const mult = numberOne * numberTwo
    const div = numberOne / numberTwo
    const restDiv = numberOne % numberTwo

    alert(`A soma entre ${numberOne} e ${numberTwo} é: ${sum}`)
    alert(`A subtração entre ${numberOne} e ${numberTwo} é: ${sub}`)
    alert(`A multiplicação entre ${numberOne} e ${numberTwo} é: ${mult}`)
    alert(`A divisão entre ${numberOne} e ${numberTwo} é: ${div}`)
    alert(`O resto da divisão entre ${numberOne} e ${numberTwo} é: ${restDiv}`)
}

mathOperator()