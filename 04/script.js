function calcularMedia() {
    let student = prompt("Qual o nome do aluno(a) ?")

    let n1 = Number(prompt("Qual a nota da primeria prova ?"))
    let n2 = Number(prompt("Qual a nota da segunda prova ?"))
    let n3 = Number(prompt("Qual a nota da terceira prova ?"))

    let average = (n1 + n2 + n3) / 3;
    average = average.toFixed(2)

    let result = average > 6

    if(result) {
        alert(`Parabéns, ${student}! você passou e ficou com a média de ${average}`)
    } else {
        alert(`Parece que não foi dessa vez, ${student}! você ficou com a media de ${average}`)
    }
}

calcularMedia()