//CAÇA BUGS - LOOPS

let contagem = prompt("insira o número de produtos que deseja inserir:")

for (let index = 0; index < contagem - 1; index++) {
    let continuar = false
    let nome = prompt("insira o nome do " + index + "º produto")
    let preco = prompt("insira o preço do produto")
    while (continuar) {
        nome = prompt("insira o nome do " + index + "º produto")
        let preco = prompt("insira o preço do produto")
        let confirmar = prompt("As informações estão corretas? Nome:"  nome  ", Preço: "  preco "  (s/n)")
        if (confirmar == "s") {
            continuar = true
        }
    }
    console.log(index "º Produto"  ", Nome: "  nome  ", Preço: "  preco)
}

