/*
Descrição: Este código é uma aplicação em javascript que realiza a listagem de bois da fazenda.
Contendo um filtro para listar os bois da fazenda, buscando sua identificação, peso inicial, peso final após a engorda,
e o percentual do ganho de peso do boi.

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

// Elementos do DOM relacionados à listagem de bois
const sltFiltroBoi = document.getElementById("sltFiltroBoi");
const btFiltrarBoi = document.getElementById("btFiltrarBoi");
const outPesqBoi = document.getElementById("outPesqBoi");

// Adiciona um evento de escuta ao botão de filtrar bois
btFiltrarBoi.addEventListener("click", mostrarLista);

// Função para mostrar a lista de bois de acordo com o filtro selecionado
function mostrarLista() {
    var listagemBoi = sltFiltroBoi.value;
    outPesqBoi.innerHTML = "";

    // Verifica se o usuário selecionou algum filtro
    if (sltFiltroBoi.value == "") {
        alert("Por favor, selecione um filtro para a listagem de Bois!");
        sltFiltroBoi.focus();

    } else {
        for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
            var prcGanhoPeso = ((vetFinal[indBoi] - vetINI[indBoi]) / vetINI[indBoi] * 100);

            // Verifica se o filtro é "Todos" ou se corresponde à espécie do boi atual
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