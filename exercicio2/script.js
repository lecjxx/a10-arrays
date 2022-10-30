//EXERCÍCIO 02

const num = [2, 78, 54, 21, 34]
console.log(num);

const nome = ["Brian", "Paul", "Freddie", "Lucas", "Roger"]
console.log(nome);

const misto = [6, "George", true]
console.log(misto);

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(num.length);
console.log(nome.length);
console.log(misto.length);

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(num[0], nome[1], misto[2]);

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array,
// e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.

console.log(num.includes(21));
console.log(misto.includes("maria"));

