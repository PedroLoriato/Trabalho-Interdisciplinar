/*
Descrição: Este código é uma aplicação em javascript que realiza a pesquisa informações sobre o peso dos bois, sendo: 
boi com maior e menor peso, percentual de ganho de peso de determinado boi e boi com menor ganho de peso.

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

// Elementos do DOM relacionados à aplicação do boi com maior e menor peso final
const sltPesoBoi = document.getElementById("sltPesoBoi");
const btFiltrarPeso = document.getElementById("btFiltrarPeso");
const outMaiorPeso = document.getElementById("outMaiorPeso");
const outMenorPeso = document.getElementById("outMenorPeso");

// Evento de clique no botão para calcular os pesos
btFiltrarPeso.addEventListener("click", calcularPeso);

// Função para pesquisar o boi com maior peso e o com menor peso
function calcularPeso() {
    var peso = sltPesoBoi.value;

    // Variáveis para armazenar os índices do boi com maior e menor peso final
    var indMaior = 0;
    var indMenor = 0;

    if (sltPesoBoi.value == "") {
        alert("Por favor, selecione um filtro para pesquisar o Boi!");
        sltPeso.focus();
    } else {
        if (peso == "Maior") {
            // Inicialize a lista de índices com o primeiro boi, que será o primeiro valor máximo encontrado.
            var indicesMaioresPesos = [0];
            var maiorPeso = vetFinal[0];

            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] > maiorPeso) {
                    // Se encontrarmos um valor maior, atualizamos a lista de índices e o valor máximo.
                    indicesMaioresPesos = [indBoi];
                    maiorPeso = vetFinal[indBoi];
                } else if (vetFinal[indBoi] === maiorPeso) {
                    // Se encontrarmos outro valor igual ao maior peso, adicionamos seu índice à lista.
                    indicesMaioresPesos.push(indBoi);
                }
            }

            // Agora que temos a lista de índices dos bois com maior peso final, podemos exibir as informações.
            outMaiorPeso.innerHTML = '';
            for (var i = 0; i < indicesMaioresPesos.length; i++) {
                var indMaior = indicesMaioresPesos[i];
                outMaiorPeso.innerHTML += `Um Boi que alcançou o <span style="font-weight: bold;">maior peso final</span> foi identificado como 
                <span style="font-weight: bold;">${vetID[indMaior]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMaior]}</span>. 
                Ao final do período de engorda de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: red;">${vetFinal[indMaior]} 
                arrobas.</span><br>`;
            }
        } else {
            // Inicialize a lista de índices com o primeiro boi, que será o primeiro valor mínimo encontrado.
            var indicesMenoresPesos = [0];
            var menorPeso = vetFinal[0];

            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                if (vetFinal[indBoi] < menorPeso) {
                    // Se encontrarmos um valor menor, atualizamos a lista de índices e o valor mínimo.
                    indicesMenoresPesos = [indBoi];
                    menorPeso = vetFinal[indBoi];
                } else if (vetFinal[indBoi] === menorPeso) {
                    // Se encontrarmos outro valor igual ao menor peso, adicionamos seu índice à lista.
                    indicesMenoresPesos.push(indBoi);
                }
            }

            // Agora que temos a lista de índices dos bois com menor peso final, podemos exibir as informações.
            outMenorPeso.innerHTML = '';
            for (var i = 0; i < indicesMenoresPesos.length; i++) {
                var indMenor = indicesMenoresPesos[i];
                outMenorPeso.innerHTML += `Um Boi que alcançou o <span style="font-weight: bold;">menor peso final</span> foi identificado como 
                <span style="font-weight: bold;">${vetID[indMenor]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMenor]}</span>. 
                Ao final do período de engorda de 100 dias, esse boi atingiu o peso de <span style="font-weight: bold; color: blue;">${vetFinal[indMenor]} 
                arrobas.</span><br>`;
            }
        }
    }
}

// Aplicação de pesquisar o percentual de ganho de peso de determinado boi, utilizando seu identificador.

// Declaração das variáveis do DOM relacionadas à aplicação do percentual de ganho de peso de determinado boi, utilizando seu identificador.
const inIdentBoi = document.getElementById("inIdentBoi");
const btFiltrarPrc = document.getElementById("btFiltrarPrc");
const outPrcPeso = document.getElementById("outPrcPeso");

// Evento de clique no botão para filtrar o percentual de ganho de peso
btFiltrarPrc.addEventListener("click", filtrarPrcPeso);

// Função para pesquisar o percentual de ganho de peso de determinado boi
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

// Declaração das variáveis do DOM relacionadas à aplicação dos dados do boi com maior e menor ganho de peso absoluto.
const sltGanhoPeso = document.getElementById("sltGanhoPeso");
const btFiltrarGanho = document.getElementById("btFiltrarGanho");
const outMaiorGanho = document.getElementById("outMaiorGanho");
const outMenorGanho = document.getElementById("outMenorGanho");

// Evento de clique no botão para filtrar os dados do boi com maior e menor ganho de peso absoluto.
btFiltrarGanho.addEventListener("click", filtrarGanhoPeso);

// Função para pesquisar os dados do boi com maior e menor ganho de peso absoluto.
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
            // Inicialize a lista de índices com o primeiro boi, que será o primeiro valor máximo encontrado.
            var indicesMaioresGanhos = [0];
            var maiorGanho = vetFinal[0] - vetINI[0];

            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                var verificarGanho = vetFinal[indBoi] - vetINI[indBoi];

                if (verificarGanho > maiorGanho) {
                    // Se encontrarmos um valor maior, atualizamos a lista de índices e o valor máximo.
                    indicesMaioresGanhos = [indBoi];
                    maiorGanho = verificarGanho;
                } else if (verificarGanho === maiorGanho) {
                    // Se encontrarmos outro valor igual ao maior ganho, adicionamos seu índice à lista.
                    indicesMaioresGanhos.push(indBoi);
                }
            }

            // Agora que temos a lista de índices dos bois com maior ganho absoluto, podemos exibir as informações.
            outMaiorGanho.innerHTML = '';
            for (var i = 0; i < indicesMaioresGanhos.length; i++) {
                var indMaior = indicesMaioresGanhos[i];
                outMaiorGanho.innerHTML += `Um Boi que alcançou o <span style="font-weight: bold;">maior ganho de peso absoluto</span> foi identificado como 
                <span style="font-weight: bold;">${vetID[indMaior]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMaior]}</span>. 
                Ao final do período de engorda de 100 dias, esse boi obteve um ganho de peso de 
                <span style="font-weight: bold; color: red;">${maiorGanho} arrobas.</span><br>`;
            }
        } else {
            // Inicialize a lista de índices com o primeiro boi, que será o primeiro valor mínimo encontrado.
            var indicesMenoresGanhos = [0];
            var menorGanho = vetFinal[0] - vetINI[0];

            for (var indBoi = 1; indBoi < vetFinal.length; indBoi++) {
                var verificarGanho = vetFinal[indBoi] - vetINI[indBoi];

                if (verificarGanho < menorGanho) {
                    // Se encontrarmos um valor menor, atualizamos a lista de índices e o valor mínimo.
                    indicesMenoresGanhos = [indBoi];
                    menorGanho = verificarGanho;
                } else if (verificarGanho === menorGanho) {
                    // Se encontrarmos outro valor igual ao menor ganho, adicionamos seu índice à lista.
                    indicesMenoresGanhos.push(indBoi);
                }
            }

            // Agora que temos a lista de índices dos bois com menor ganho absoluto, podemos exibir as informações.
            outMenorGanho.innerHTML = '';
            for (var i = 0; i < indicesMenoresGanhos.length; i++) {
                var indMenor = indicesMenoresGanhos[i];
                outMenorGanho.innerHTML += `Um Boi que alcançou o <span style="font-weight: bold;">menor ganho de peso absoluto</span> foi identificado como 
                <span style="font-weight: bold;">${vetID[indMenor]}</span>, e pertence à espécie <span style="font-weight: bold;">${vetEspecie[indMenor]}</span>. 
                Ao final do período de engorda de 100 dias, esse boi obteve um ganho de peso de 
                <span style="font-weight: bold; color: blue;">${menorGanho} arrobas.</span><br>`;
            }
        }
    }
}