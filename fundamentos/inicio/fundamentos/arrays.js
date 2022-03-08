const valores = [7.7, 8.9, 6.3, 9.2]; // array comeca com 0 ou seja o 7.7 esta na posicao 0
console.log(valores[0], valores[3]);
console.log(valores[4]); // nao existe a posicao 4, ele retorna undefined

valores[4] = 10; // adiciona um novo valor na posicao 4
console.log(valores);

valores[10] = 10; // adiciona um novo valor na posicao 10
console.log(valores);
console.log(valores.length); // mostra o tamanho do array

valores.push({ id: 3 }, false, null, `teste`);// adiciona um novo valor no final do array
console.log(valores);

console.log(valores.pop()); // remove o ultimo valor do array
delete valores[0]; // deleta o valor na posicao 0
console.log(valores); //ja tirou tambem o que pedi pra tirar anteriormente a strig teste

console.log(typeof valores);
//console.log(valores.toString()); // converte o array em string
