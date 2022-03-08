// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));
// => e a forma abreviada de escrever function

// retorno implicito
const subtracao = (a, b) => a - b; // se nao tiver retorno, o retorno sera undefined, forma mais reduzida de escrever a funcao
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a); // forma mais reduzida de escrever a funcao
imprimir2(`Legal!!`);
