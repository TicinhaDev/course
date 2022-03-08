let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
//console.log(valor.ToString()); nao consegue chamar ToString de null
// nao consigo chamar nada quando o que vem antes e null,porem posso transformar algo em null

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);// sempre preferir o null para não dar erro



