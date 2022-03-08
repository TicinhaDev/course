const nome = 'Leticia';
const concatenacao = 'Olá ' + nome + '!';
const template = `

    ola
    ${nome}!`; // template string,com o simbolo $ e entre chaves para conseguir ler o texto
console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);
// na funcao abaixo = transforma as letras em maiusculas
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);




const f = 'Hellow';
const g = 'World';
const h = 1 + 1;


console.log(`${f} ${g} ${h}`);
