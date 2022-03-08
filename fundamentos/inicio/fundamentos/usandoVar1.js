{
    {
        {
            {
                var sera = `Sera??`;
                console.log(sera); // conseguimos ver o resultado pq estamos dentro de um bloco
            }
        }
    }
}
console.log(sera);

function teste() { // () dentro de uma function não é um bloco, é um escopo
    var local = 123;
    console.log(local);
}
teste();
//console.log(local); // não conseguimos ver o resultado pq estamos fora de um bloco

