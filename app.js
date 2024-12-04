//TAREFA NUMERO 1

alert("Digite o Dia da semana");

let dia = prompt("Qual dia e hj");

let SemanaFim = ("Sabado" , "Domingo");

if (dia == "Sabado" || dia == "Domingo"){
    alert("Bom final de Semana");
 } else {
    alert("Boa semana");
 }

//TAREFA NUMERO 2


alert("Verificador de numeros")

let NumPosNeg = prompt("Digite um Numero possitivo ou Negativo");

if (NumPosNeg >= 0){
    alert("O Numero|" + NumPosNeg + "|E Possitivo");
}else{
    alert("O numero|" + NumPosNeg + "|E Negativo");
}

//TAREFA NUMERO 3

alert("JOGO DOS PONTOS");

let PontuacaoGame = prompt("Qual foi sua Pontuacao?");

if (PontuacaoGame >= 100){
    alert ("PARABRENS VOCE TIROU" + PontuacaoGame + "VOCE GANHOUUUU")
    console.log("O USUARIO GANHOU CODIGO EXECUTADO COM SUCESSO");
}else{
    alert("PELO VISTO VOCE TIROU" + PontuacaoGame + "TENTE NOVAMENTE PARA GANHAR O PREMIO")
    console.log("O USUARIO PERDEU O GAME CODIGO EXECUTADO COM SUCESSO");
}

//TAREFA 4

alert("BANCO DA CAIXA DO BRASIL");

let SaldoBancario = 100

let RetiradaCaixa = prompt("Qual valor deseja sacar de" +SaldoBancario);

alert("Ok voce retirou" + RetiradaCaixa);

let ValorFinal = SaldoBancario - RetiradaCaixa;

alert("Sobrou na sua conta um total de "+ValorFinal);

//TAREFA 5

let NomeUser = prompt("Porfavor Insira seu Nome de Usuario");
alert("Seja bem-Vindo" + NomeUser);