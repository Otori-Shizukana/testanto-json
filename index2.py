invoice = {
    "nome": "João",
    "idade": 33,
    "compras": {
        0: ['Teclado Mecânico', 50.00],
        1: ['Mouse gamer', 90.00],
        2: ['Monitor 25 polegadas 144hz', 1100.00]
    }
}
  
def geratorInvoice(invoice):
    print(f'O comprador é: {invoice["nome"]}')
    print(f'idade: {invoice["idade"]}')
    print("--------------------------")
    for index in invoice["compras"]:
        (produto, valor) = invoice["compras"][index]
        print(f'Comprou: {produto}, R${valor:.2f}')

geratorInvoice(invoice)