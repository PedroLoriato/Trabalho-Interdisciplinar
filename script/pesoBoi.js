/*
Descrição:


Versão: 2.0 
*/

vetID = JSON.parse(sessionStorage.getItem("vetID"));
vetINI = JSON.parse(sessionStorage.getItem("vetINI"));
vetFinal = JSON.parse(sessionStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(sessionStorage.getItem("vetEspecie"));

// Aplicação de pesquisar o boi que alcançou o maior peso final e o menor peso final, após o período de engorda de 100.
const sltPesoBoi = document.getElementById("sltPesoBoi");
const btFiltrarPeso = document.getElementById("btFiltrarPeso");
const outMaiorPeso = document.getElementById("outMaiorPeso");
const outMenorPeso = document.getElementById("outMenorPeso");

btFiltrarPeso.addEventListener("click", calcularPeso);

function calcularPeso() {
    var peso = sltPesoBoi.value;

    var indMaior = 0;
    var indMenor = 0;

    if (sltPesoBoi.value == "") {
        alert("Por favor, selecione um filtro para pesquisar o Boi!");
        sltPeso.focus();
    } else {

        if (peso == "Maior") {
            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] > vetFinal[indMaior]) {
                    indMaior = indBoi;
                    outMaiorPeso.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">maior peso final</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMaior]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMaior]}</span>. 
                    Ao final do período de engorda de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: red;">${vetFinal[indMaior]} arrobas</span>.`
                }
            }
        } else {
            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] < vetFinal[indMenor]) {
                    indMenor = indBoi;
                    outMenorPeso.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">menor peso final</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMenor]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMenor]}</span>. 
                    Ao final do período de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: blue;">${vetFinal[indMenor]} arrobas</span>.`
                }
            }
        }
    }
}

// Aplicação de pesquisar o percentual de ganho de peso de determinado boi, utilizando seu identificador.

const inIdentBoi = document.getElementById("inIdentBoi");
const btFiltrarPrc = document.getElementById("btFiltrarPrc");
const outPrcPeso = document.getElementById("outPrcPeso");

btFiltrarPrc.addEventListener("click", filtrarPrcPeso);

function filtrarPrcPeso() {
    var identificadorBoi = inIdentBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(identificadorBoi);

    if (inIdentBoi.value == "") {
        alert("Atenção!\n\nDigite um identificador válido pesquisar o identificador do boi.");
        inIdentBoi.focus();
        outPrcPeso.innerHTML = "";
    } else if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para pesquisar o identificador do boi.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
        outPrcPeso.innerHTML = "";
    } else if (identificadorBoi.length < 4) {
        alert("Atenção!\n\nDigite 4 caracteres para pesquisar o identificador do boi.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
        outPrcPeso.innerHTML = "";
    } else if (!vetID.includes(identificadorBoi)) {
        alert("Atenção!\n\nNenhum boi com este identificador foi encontrado no sistema da fazenda.\n\nTente Novamente.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
        outPrcPeso.innerHTML = "";
    } else {
        for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
            var prcGanhoPeso = ((vetFinal[indBoi] - vetINI[indBoi]) / vetINI[indBoi] * 100);
            if (vetID[indBoi] == identificadorBoi) {
                outPrcPeso.innerHTML = `O Boi com Identificador <span style="font-weight: bold; color: red;">${vetID[indBoi]}</span>, 
                    da espécie <span style="font-weight: bold;">${vetEspecie[indBoi]}</span>, chegou à fazenda com peso inicial de 
                    <span style="font-weight: bold; color: green">${vetINI[indBoi]} arrobas</span>, 
                    e ao final do Período de Engorda de 100 dias, ficou com um peso final de <span style="font-weight: bold; color: green">${vetFinal[indBoi]} 
                    arrobas</span>, adquirindo um ganho de peso de <span style="font-weight: bold; color: blue">
                    ${prcGanhoPeso.toFixed(0)}%</span>.`;
            }
        }
    }

}

// Aplicação de pesquisar os dados do boi com maior e menor ganho de peso absoluto.

const sltGanhoPeso = document.getElementById("sltGanhoPeso");
const btFiltrarGanho = document.getElementById("btFiltrarGanho");
const outMaiorGanho = document.getElementById("outMaiorGanho");
const outMenorGanho = document.getElementById("outMenorGanho");

btFiltrarGanho.addEventListener("click", filtrarGanhoPeso);

function filtrarGanhoPeso() {
    var ganhoPeso = sltGanhoPeso.value;

    var maiorGanho = vetFinal[0] - vetINI[0];
    var menorGanho = vetFinal[0] - vetINI[0];

    var indMaior = 0;
    var indMenor = 0;

    if (sltGanhoPeso.value == "") {
        alert("Por favor, selecione um filtro para pesquisar o Boi!");
        sltGanhoPeso.focus();
    } else {
        if (ganhoPeso == "Maior") {
            for (var indBoi = 0; indBoi < vetFinal.length; indBoi++) {
                var verificarGanho = vetFinal[indBoi] - vetINI[indBoi];
                if (verificarGanho > maiorGanho) {
                    maiorGanho = verificarGanho;
                    indMaior = indBoi;
                    outMaiorGanho.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">maior ganho de peso absoluto</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMaior]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMaior]}</span>. 
                    Ao final do período de engorda de 100 dias, esse boi obteve um ganho de peso de 
                    <span style="font-weight: bold; color: red;">${maiorGanho} arrobas</span>`;
                }
            }
        } else {
            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                var verificarGanho = vetFinal[indBoi] - vetINI[indBoi];
                if (verificarGanho < menorGanho) {
                    menorGanho = verificarGanho;
                    indMenor = indBoi;
                    outMenorGanho.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">menor ganho de peso absoluto</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMenor]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMenor]}</span>. 
                    Ao final do período de engorda de 100 dias, esse boi obteve um ganho de peso de 
                    <span style="font-weight: bold; color: blue;">${menorGanho} arrobas</span>`;
                }
            }
        }
    }
}