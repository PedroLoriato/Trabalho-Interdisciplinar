/*
Descrição:


Versão: 2.0 
*/

vetID = JSON.parse(sessionStorage.getItem("vetID"));
vetINI = JSON.parse(sessionStorage.getItem("vetINI"));
vetFinal = JSON.parse(sessionStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(sessionStorage.getItem("vetEspecie"));

// Aplicação de pesquisar o Boi com Maior ou Menor Peso, após o período de engorda
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
    }
    switch (peso) {
        case "Maior":
            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] > vetFinal[indMaior]) {
                    indMaior = indBoi;
                    outMaiorPeso.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">maior peso final</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMaior]}</span>, pertencente à espécie <span style="font-weight: bold;">${vetEspecie[indMaior]}</span>.
                    <br>Ao final do período de engorda de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: red;">${vetFinal[indMaior]} arrobas</span>.`
                }
            }
            break;

        case "Menor":
            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] < vetFinal[indMenor]) {
                    indMenor = indBoi;
                    outMenorPeso.innerHTML = `O Boi que alcançou o <span style="font-weight: bold;">menor peso final</span> foi identificado como 
                    <span style="font-weight: bold;">${vetID[indMenor]}</span>, pertencente à espécie <span style="font-weight: bold;">${vetEspecie[indMenor]}</span>.
                    <br>Ao final do período de  de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: blue;">${vetFinal[indMenor]} arrobas</span>.`
                }
            }
            break;
    }
}