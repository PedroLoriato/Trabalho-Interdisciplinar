/*
Descrição: Este código é uma aplicação em JavaScript que realiza a gestão de bois da fazenda.
Permite adicionar novos bois ao sistema, fornecendo informações como identificador, espécie, peso inicial e peso final após o período de engorda.
Além disso, possui funcionalidade para remover bois do sistema, onde o proprietário e/ou funcionário deve fornecer o motivo da remoção.

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

// Declaração e associação das variáveis relacionadas à adição de boi
const inIdentBoi = document.getElementById("inIdentBoi");
const sltEspecieBoi = document.getElementById("sltEspecieBoi");
const inPesoInicialBoi = document.getElementById("inPesoInicialBoi");
const inPesoFinalBoi = document.getElementById("inPesoFinalBoi");
const btAdicionarBoi = document.getElementById("btAdicionarBoi");

// Adiciona um evento de clique ao botão "btAdicionarBoi" para chamar a função "adicionarBoi" ao ser clicado
btAdicionarBoi.addEventListener("click", adicionarBoi);

// Função para adicionar um novo boi ao sistema
function adicionarBoi() {
    // Obtém os valores dos campos de entrada
    var identificadorBoi = inIdentBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(identificadorBoi);

    var especieBoi = sltEspecieBoi.value;

    var pesoInicialBoi = Number(inPesoInicialBoi.value);
    var pesoFinalBoi = Number(inPesoFinalBoi.value);

    // Realiza a validação dos campos de entrada para garantir dados corretos
    if (inIdentBoi.value == "") {
        alert("Atenção!\n\nDigite um identificador válido para adicionar um novo boi ao sistema da fazenda.");
        inIdentBoi.focus();
    } else if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para criar um identificador para o boi a ser adicionado ao sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
    } else if (identificadorBoi.length < 4) {
        alert("Atenção!\n\nDigite 4 caracteres para criar o identificador para o boi a ser adicionado ao sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
    } else if (vetID.includes(identificadorBoi)) {
        alert("Atenção!\n\nJá existe um boi com este identificador no sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();

    } else if (sltEspecieBoi.value == "") {
        alert("Atenção!\nSelecione a espécie do boi a ser adicionado ao sistema da fazenda.");
        sltEspecieBoi.focus();

    } else if (inPesoInicialBoi.value == "") {
        alert("Atenção!\n\nDigite o peso inicial do boi a ser adicionado ao sistema da fazenda.");
        inPesoInicialBoi.focus();
    } else if (isNaN(pesoInicialBoi)) {
        alert("Atenção.\n\nDigite apenas números para o peso incial do boi.");
        inPesoInicialBoi.value = "";
        inPesoInicialBoi.focus();
    } else if (pesoInicialBoi > 13) {
        alert("Atenção.\n\nO peso máximo permitido para o peso inicial é de 13 arrobas.");
        inPesoInicialBoi.value = "";
        inPesoInicialBoi.focus();
    }
    else if (pesoInicialBoi <= 0) {
        alert("Atenção.\n\nDigite um peso válido para o peso inicial do boi.");
        inPesoInicialBoi.value = "";
        inPesoInicialBoi.focus();

    } else if (inPesoFinalBoi.value == "") {
        alert("Atenção!\n\nDigite o peso final do boi a ser adicionado ao sistema da fazenda.");
        inPesoFinalBoi.focus();
    } else if (isNaN(pesoFinalBoi)) {
        alert("Atenção.\n\nDigite apenas números para o peso incial do boi.");
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.focus();
    } else if (pesoFinalBoi < 16) {
        alert("Atenção.\n\nO peso mínimo permitido para o peso final é de 16 arrobas.");
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.focus();

    } else {
        // Caso todos os campos estejam preenchidos corretamente, o boi é adicionado ao sistema
        vetID.push(identificadorBoi);
        vetINI.push(pesoInicialBoi);
        vetFinal.push(pesoFinalBoi);
        vetEspecie.push(especieBoi);

        alert(`O boi com identificador ${identificadorBoi} foi adicionado ao sistema da fazenda com sucesso!
        \nO boi da espécie ${especieBoi} apresentou um peso inicial de ${pesoInicialBoi} arrobas, e após um período de engorda de 100 dias, o seu peso final foi de ${pesoFinalBoi} arrobas.`);

        // Os dados são armazenados no sessionStorage
        sessionStorage.setItem("vetID", JSON.stringify(vetID));
        sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
        sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
        sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));

        location.reload();
    }

}

// Declaração das variáveis relacionadas à remoção de boi
const inIdentRemovBoi = document.getElementById("inIdentRemovBoi");
const outRemoverBoi = document.getElementById("outRemoverBoi");
const btRemoverBoi = document.getElementById("btRemoverBoi");

// Adiciona um evento de escuta ao campo de entrada de identificação do boi
inIdentRemovBoi.addEventListener("input", function () {
    // Verifica se o campo de identificação do boi tem exatamente 4 caracteres
    if (inIdentRemovBoi.value.length === 4) {
        infoRemoverBoi();
    }
});

// Função para pesquisar e exibir informações detalhadas do boi a ser removido
function infoRemoverBoi() {
    var removerIdent = inIdentRemovBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(removerIdent);

    // Se o identificador não for válido (não contém apenas letras e números)
    if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para pesquisar o identificador do boi a ser removido do sistema da fazenda.");
        inIdentRemovBoi.value = "";
        inIdentRemovBoi.focus();
        outRemoverBoi.innerHTML = "";
        btRemoverBoi.style.display = "none";

        // Se o identificador for válido e não estiver na lista de bois cadastrados no sistema
    } else if (!vetID.includes(removerIdent)) {
        alert("Atenção!\n\nNenhum boi com este identificador foi encontrado no sistema da fazenda.\n\nTente Novamente.");
        outRemoverBoi.innerHTML = "";
        location.reload();

        // Se o identificador for válido e estiver na lista de bois cadastrados no sistema
    } else {
        for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
            if (removerIdent == vetID[indBoi]) {
                outRemoverBoi.innerHTML = `<p>Foi encontrado o Boi com Identificador <span style="font-weight: bold; color: red;">${vetID[indBoi]}</span></p>
                <p>Espécie: <span style="font-weight: bold;">${vetEspecie[indBoi]}</span></p>
                <p>Peso inicial: <span style="font-weight: bold;"> ${vetINI[indBoi]} arrobas</span></p>
                <p>Peso Final: <span style="font-weight: bold;">${vetFinal[indBoi]} arrobas</span></p>
                <p> Período de Engorda: <span style="font-weight: bold;">100 dias.</span></p>`;

                btRemoverBoi.style.display = "inline-flex";
            }
        }
    }
}

// Adiciona um evento de escuta ao botão de remoção do boi
btRemoverBoi.addEventListener("click", removerBoi);

// Função para remover o boi do sistema da fazenda
function removerBoi() {
    var removerIdent = inIdentRemovBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(removerIdent);

    // Se o identificador não for válido (não contém apenas letras e números)
    if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para pesquisar o identificador do boi a ser removido do sistema da fazenda.");
        inIdentRemovBoi.value = "";
        inIdentRemovBoi.focus();
        outRemoverBoi.innerHTML = "";
        btRemoverBoi.style.display = "none";

        // Se o identificador tiver menos de 4 caracteres
    } else if (removerIdent.length < 4) {
        alert("Atenção!\n\nDigite 4 caracteres para pesquisar o identificador do boi a ser removido do sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
        outRemoverBoi.innerHTML = "";

        // Se o identificador for válido e não estiver na lista de bois cadastrados no sistema
    } else if (!vetID.includes(removerIdent)) {
        alert("Atenção!\n\nNenhum boi com este identificador foi encontrado no sistema da fazenda.\n\nTente Novamente.");
        outRemoverBoi.innerHTML = "";
        btRemoverBoi.style.display = "none";
        location.reload();

        // Se o identificador for válido e estiver na lista de bois cadastrados no sistema
    } else {
        // Solicita ao usuário que digite o motivo da remoção
        const motivo = prompt("Digite o motivo da remoção:");

        // Se o usuário não cancelar o prompt (ou seja, digitou um motivo)
        if (motivo !== null) {
            // Exibe uma confirmação para o usuário com o motivo digitado
            const confirmacao = confirm(`Deseja finalizar a ação de remoção?\n\nMotivo: ${motivo}`);

            // Se o usuário confirmar a remoção
            if (confirmacao) {
                for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
                    if (removerIdent == vetID[indBoi]) {
                        // Remove o boi correspondente das listas de identificadores, espécies, pesos iniciais e finais
                        vetID.splice(indBoi, 1);
                        vetEspecie.splice(indBoi, 1);
                        vetINI.splice(indBoi, 1);
                        vetFinal.splice(indBoi, 1);
                    }
                }

                // Os dados são armazenados no sessionStorage
                sessionStorage.setItem("vetID", JSON.stringify(vetID));
                sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
                sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
                sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));

                alert("Boi removido com sucesso!");

                location.reload();
            }
        } else {
            // Se o usuário cancelar o prompt (não digitou um motivo), exibe uma mensagem de alerta
            alert("Atenção!\n\nDigite o motivo de remover o boi do sistema.")
        }
    }
}