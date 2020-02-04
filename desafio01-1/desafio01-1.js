// CALCULO IMC

const nome = "Lais";
const peso = 50;
const altura = 1.60;

imc = parseFloat((peso / (altura * altura)).toFixed(2));

if(imc >= 30){
    console.log(`${nome} você está acima do peso; seu imc é: ${imc}!`);
}else{
    console.log(`${nome} você não está acima do peso; seu imc é: ${imc}!`);
}

/*
------------------------------------------------------------------------------
CALCULO APOSENTADORIA
*/
const sexo = "F";
const idade = 48;
const contribuicao = 35;

if(sexo == 'F'){
    if((contribuicao >= 30) || ((idade + contribuicao) >= 85)){
        console.log(`${nome}, você pode se aposentar!  tempo de contribuição: ${contribuicao}, soma da idade e contribuição: ${(idade + contribuicao)}`); 
    }else{
        console.log(`${nome}, você ainda não pode se aposentar! seu tempo de contribuição é ${contribuicao} e a soma da idade e contribuição é ${(idade + contribuicao)}`); 
    }
}else{
    if((contribuicao >= 35) || ((idade + contribuicao) >= 90)){
        console.log(`${nome}, você pode se aposentar!  tempo de contribuição: ${contribuicao}, soma da idade e contribuição: ${(idade + contribuicao)}`); 
    }else{
        console.log(`${nome}, você ainda não pode se aposentar! seu tempo de contribuição é ${contribuicao} e a soma da idade e contribuição é ${(idade + contribuicao)}`); 
    }
} 