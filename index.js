let invoice = {
    nome: "João",
    idade: 33,
    compras: {
        0: ['Teclado Mecânico', 50.00],
        1: ['Mouse gamer', 90.00],
        2: ['Monitor 25 polegadas 144hz', 1100.00]
    }
}

generateInvoice(invoice)
function generateInvoice(){
    console.log(`O comprador é: ${invoice.nome}`)
    console.log(`idade: ${invoice.idade}`)
    console.log('-----------------------------')
    for(let index in invoice.compras){
        let [produto, valor] = invoice.compras[index]
        console.log(`Comprou: ${produto}, R$${valor.toFixed(2)}`)
    }
}