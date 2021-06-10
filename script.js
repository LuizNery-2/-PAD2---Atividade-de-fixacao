// 1 – Crie uma função que retorna a string “Olá, ” concatenada com 
// um argumento text (a ser passado para a função) 
// e com ponto de exclamação “!” no final.

function questao1 (text){
    return "Olá " + text + "!";
}
console.log(questao1("Gerson"));
// 2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), 
// mostre no console a soma, subtração, multiplicação 
// ou divisão desses valores, dependendo da função Callabck.

function questao2(A,B,Callback){
    console.log (Callback(A,B));
}
questao2(6,2, function(A,B){
  return A + B;
}); 
questao2(6,2,function(A,B){
    return A - B;
});
questao2(6,2,function(A,B){
    return A * B;
});
questao2(6,2, function(A,B){
  return A/B;
})
// 3 – Crie uma função que recebe um valor e uma callback como parâmetro, que retorna 
// uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado 
// na primeira função como parâmetro é divisível por um outro numero passado pela 
// função interna e retorne true ou false.

function questao3(Valor1, Callback){
   return function(Valor2){
       
    return Callback(Valor1, Valor2)


   }
}

var verifica = questao3(12,function(Valor1, Valor2){
     if (Valor1 % Valor2 == 0){
         return true;
     }
     else{
         return false ;
     }
})

console.log(verifica(2));

// 4 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.

function questao4(A){
    switch(A){
      case 1:
          return "janeiro, pois este é o 1° mês."
          break;
        case 2:
            return "Fevereiro, pois este é o 2° mês."
            break;
        case 3:
            return "Março, pois este é o 3° mês."
            break;
        case 4:
            return "Abril, pois este é o 4° mês."
            break;
        case 5:
            return "Maio, pois este é o 5° mês."
            break;
        case 6:
            return "Junho, pois este é o 6° mês."
            break;
        case 7:
            return "Julho, pois este é o 7° mês."
            break;
        case 8:
            return "Agosto, pois este é o 8° mês."
            break;
        case 9:
            return "Setembro, pois este é o 9° mês."
            break;
        case 10:
            return "Outubro, pois este é o 10° mês."
            break;
        case 11:
            return "Novembro, pois este é o 11° mês."
            break;
        case 12:
            return "Dezembro, pois este é o 12° mês."
            break;
        default:
            return "Numero invalido"
    }
}

console.log(questao4(5));


// 5 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.

function questao5(A, B, Callback){
      return Callback(A,B)

}

questao5(5, 4, function(A,B){
   if (A > B)  {
       console.log(`${A} é maior que ${B}`)
   } 
   else {
       console.log(`${A} não é maior que ${B}`)
   }
})
questao5(6,12/2,function(A,B){
    if (A == B)  {
        console.log(`${A} é igual que ${B}`)
    } 
    else {
        console.log(`${A} não é igual que ${B}`)
    }
})



