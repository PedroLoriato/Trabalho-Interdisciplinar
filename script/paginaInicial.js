/*
Descrição: Este código é uma aplicação em javascript que realiza a contagem do total de bois e a quantidade de bois das espécies Angus, Hereford e Nelore.

Grupo 4: Gerenciamento de uma fazenda de engorda de boi

Integrantes:

André Boecker Sobrinho
Laélio Júnior
Lucas Miguel Lirio Nascimento
Luiz Felipe Föeger dos Santos
Rickelmy Freitas dos Santos
Pedro Henrique Loriato

Versão: 1.0 
*/

// Recupera os dados dos bois armazenados na sessionStorage
vetID = JSON.parse(sessionStorage.getItem("vetID"));
vetINI = JSON.parse(sessionStorage.getItem("vetINI"));
vetFinal = JSON.parse(sessionStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(sessionStorage.getItem("vetEspecie"));

// Elementos do DOM relacionados à exibição do total de bois e quantidade por espécie
const outBoisTotal = document.getElementById("outBoisTotal");
const outQtdAngus = document.getElementById("outQtdAngus");
const outQtdHereford = document.getElementById("outQtdHereford");
const outQtdNelore = document.getElementById("outQtdNelore");

// Variável para armazenar a quantidade total de bois engordados
var qtdTotalBois = vetID.length;

// Objeto para armazenar a quantidade de bois por espécie
var qtdPorEspecie = {
    "Angus": 0,
    "Hereford": 0,
    "Nelore": 0
};

// Loop para calcular a quantidade de bois por espécie
for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
    var especie = vetEspecie[indBoi];
    qtdPorEspecie[especie]++;
}

// Atualiza o conteúdo dos elementos da página inicial com as quantidades dos bois
outBoisTotal.textContent = `${qtdTotalBois} BOIS ENGORDADOS`;
outQtdAngus.textContent = `${qtdPorEspecie["Angus"]} BOIS ENGORDADOS`;
outQtdHereford.textContent = `${qtdPorEspecie["Hereford"]} BOIS ENGORDADOS`;
outQtdNelore.textContent = `${qtdPorEspecie["Nelore"]} BOIS ENGORDADOS`;