//Considere a quantidade de alunos presentes na sala, percorra de zero até o número total de alunos e retornar os seguintes resultados.

//se o número for par, escreva 'par' e o número correspondente
//se o número for ímpar, escreva 'impar' e o número correspondente
//se o número for zero, escreva 'zero' e o número correspondente 

let alunos = 15;

for(let i = 0; i <= alunos; i++){
    if(i == 0){ console.log(`Zero: ${i}`);} 
    else if(i % 2 == 0){ 
        console.log(`Par: ${i}`);} else {
            console.log(`Ímpar: ${i}`); 
        } 
}