let isAtivo = false
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); // !! é o operador de negação, ele inverte o valor

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' '); //mesmo no espaco vazio ele retorna true
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = false));

console.log(`para finalizar...`);
console.log(!!('' || null || 0 || ' ')); //se algum dos valores for verdadeiro ele retorna true

let nome = " Leticia"; //se deixar o espaco vazio vai responder como desconhecido
console.log(nome || `desconhecido`); //se acrescentar nome,ele anula a palavra desconhecido e coloca o nome





