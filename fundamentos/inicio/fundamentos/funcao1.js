//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); // não funciona
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // ele calcula os dois primeiros que seriam a e b, e ignora o resto.
imprimirSoma();

// funcao com retorno
function soma(a, b = 1) {
    return a + b;
}
console.log(soma(2, 3)); //se colocar a palavra soma fora dos parenteses ele nao funciona.
console.log(soma(2));
console.log(soma());
