let entrada = require(`readline-sync`);

let senha = 123;

let contador = 1;
while (contador <= 3) {
 let senhaDigitada = entrada.question(`Digite sua senha`);

 if (senhaDigitada == senha) {
     console.log(`Senha correta`);
     break;
 } else console.log(`Senha incorreta`);

 console.log(`Você possue ${3-contador} tentativas`);

 contador++;
}

