var numero = 1;
{
    let numero = 2;
    console.log(`dentro =`, numero);
}
console.log(` fora =`, numero); // fica diferente pq estao em escopos diferentes
