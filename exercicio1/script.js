// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = [];


// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const fruta1 = {
    nome: "Banana",
    preco: 5.99,
    disponibilidade: true
}

const fruta2 = {
    nome: "Manga",
    preco: 7.99,
    disponibilidade: true
}

const fruta3 = {
    nome: "Melancia",
    preco: 10.99,
    disponibilidade: true
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

sacolao.push(fruta1, fruta2, fruta3);

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

console.log(sacolao);