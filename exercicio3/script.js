//XERCÍCIO 03

//crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;

const numeros = [1, 2, 3, 4]
const frutas = ["uva", "banana", "morango", "manga"]
const pdc = ["mão", "boca", "pé", "perna"]

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const copiaNumeros = numeros.slice() //slice corta o vínculo entre cópias

copiaNumeros.push(5);
console.log(numeros, copiaNumeros);

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const copiaFrutas = frutas.slice() //slice corta o vínculo entre cópias

copiaFrutas.pop();
console.log(frutas, copiaFrutas);

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const copiaPdc = pdc.slice()

copiaPdc.splice(1,1) //(indice, quantidade) - a partir de x, remova y itens da array
console.log(pdc, copiaPdc);