/*
Descrição:


Versão: 2.0 
*/

vetID = JSON.parse(sessionStorage.getItem("vetID"));
vetINI = JSON.parse(sessionStorage.getItem("vetINI"));
vetFinal = JSON.parse(sessionStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(sessionStorage.getItem("vetEspecie"));

// Aplicação de Listagem dos Bois
const sltFiltroBoi = document.getElementById("sltFiltroBoi");
const btFiltrarBoi = document.getElementById("btFiltrarBoi");
const outPesqBoi = document.getElementById("outPesqBoi");

btFiltrarBoi.addEventListener("click", mostrarLista);

function mostrarLista() {

    var listagemBoi = sltFiltroBoi.value;
    outPesqBoi.innerHTML = "";

    if (sltFiltroBoi.value == "") {
        alert("Por favor, selecione um filtro para a listagem de Bois!");
        sltFiltroBoi.focus()
    } else {
        for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
            var prcGanhoPeso = ((vetFinal[indBoi] - vetINI[indBoi]) / vetINI[indBoi] * 100);

            if (listagemBoi == "Todos" || vetEspecie[indBoi] == listagemBoi) {
                outPesqBoi.innerHTML += `<br> O Boi com Identificador <span style="font-weight: bold; color: red;">${vetID[indBoi]}</span>, 
                    da espécie <span style="font-weight: bold;">${vetEspecie[indBoi]}</span>, chegou à fazenda com peso inicial de 
                    <span style="font-weight: bold; color: green">${vetINI[indBoi]} arrobas</span>, 
                    e ao final do Período de Engorda de 100 dias, ficou com um peso final de <span style="font-weight: bold; color: green">${vetFinal[indBoi]} 
                    arrobas</span>, adquirindo um ganho de peso de <span style="font-weight: bold; color: blue">
                    ${prcGanhoPeso.toFixed(0)}%</span>.<br>`;
            }
        }
    }
}