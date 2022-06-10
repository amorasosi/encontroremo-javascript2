let = entradaConsole = require("readline-sync");

let idade = entradaConsole.question(`Qual sua idade?`)

if (idade >= 18) {
    console.log(`Pode entrar`);
} else { console.log(`Pode ir embora`);
    
}