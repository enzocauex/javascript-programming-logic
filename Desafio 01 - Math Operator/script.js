function mathOperations() {
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))

    let sum = num1 + num2
    let sub = num1 - num2 
    let mult = num1 * num2
    let rest = num1 % num2

    alert(`A soma entre o número ${num1} e o número ${num2} é: ${sum}`)
    alert(`A subtração entre o número ${num1} e o número ${num2} é: ${sub}`)
    alert(`A multiplicação entre o número ${num1} e o número ${num2} é: ${mult}`)
    alert(`O resto da divisão entre o número ${num1} e o número ${num2} é: ${rest}`)
    
    if(sum % 2 == 0) {
        alert("A soma dos dois números dá um numero Par")
    } else {
        alert("A soma dos dois números dá um numero Ímpar")
    }
}

mathOperations()