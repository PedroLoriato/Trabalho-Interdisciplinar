/*
Descrição:


Versão: 2.0 
*/

vetID = JSON.parse(localStorage.getItem("vetID"));
vetINI = JSON.parse(localStorage.getItem("vetINI"));
vetFinal = JSON.parse(localStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(localStorage.getItem("vetEspecie"));

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
            for (var ind = 1; ind < vetFinal.length; ind++) {
                if (vetFinal[ind] > vetFinal[indMaior]) {
                    indMaior = ind;
                    outMaiorPeso.innerHTML = `O Boi com maior peso foi de <span style="color: red;">${vetFinal[indMaior]} arrobas!</span>`
                }
            }
            break;

        case "Menor":
            for (var ind = 1; ind < vetFinal.length; ind++) {
                if (vetFinal[ind] < vetFinal[indMenor]) {
                    indMenor = ind;
                    outMenorPeso.innerHTML = `O Boi com menor peso foi de <span style="color: blue;">${vetFinal[indMenor]} arrobas!</span>`
                }
            }
            break;
    }
}