//-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

//-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

//-Listar participantes e palestrantes por evento.
 
//-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


let datahoje = 10/06/2022;
let dataevento = 25/12/2022;
let idadepart = 18;
let participantes = ["Julia" , "Fernanda" , 'Aline', 'Claudia']


if(dataevento <= datahoje){
    console.log(`Cadastro não será permitido por data inválida.`);
} else if(idadepart < 18) {
    console.log(`Cadastro não é permitido pela idade`);
}else if(participantes.length < 100){
    console.log(`Permitir cadastro`)
}else console.log(`Cadastro não será permitido por ter excedido o limite`);