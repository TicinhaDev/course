const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna o caractere da posição 4
console.log(escola.charAt(5)); // retorna o caractere vazio
console.log(escola.charCodeAt(3)); // retorna o valor da tabela ASCII do caractere
console.log(escola.indexOf('3')); // retorna a posição do caractere

console.log(escola.substring(1)); // retorna a partir da posição 1
console.log(escola.substring(0, 3)); // retorna a partir da posição 0 e até a posição 3

console.log("escola ".concat(escola).concat("!")); // concatenação
console.log("escola " + escola + "!"); // concatenação
console.log(escola.replace(3, "e")); // substitui o caractere na posição 3 pelo caractere :e

console.log('Ana,Maria,Pedro'.split(',')) // transforma a string em um array  
