/*
Descrição:


Versão: 2.0 
*/

vetID = JSON.parse(sessionStorage.getItem("vetID"));
vetINI = JSON.parse(sessionStorage.getItem("vetINI"));
vetFinal = JSON.parse(sessionStorage.getItem("vetFinal"));
vetEspecie = JSON.parse(sessionStorage.getItem("vetEspecie"));

const inIdentBoi = document.getElementById("inIdentBoi");
const sltEspecieBoi = document.getElementById("sltEspecieBoi");
const inPesoInicialBoi = document.getElementById("inPesoInicialBoi");
const inPesoFinalBoi = document.getElementById("inPesoFinalBoi");
const btAdicionarBoi = document.getElementById("btAdicionarBoi");

btAdicionarBoi.addEventListener("click", adicionarBoi);

function adicionarBoi() {
    var identificadorBoi = inIdentBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(identificadorBoi);

    var especieBoi = sltEspecieBoi.value;

    var pesoInicialBoi = Number(inPesoInicialBoi.value);
    var pesoFinalBoi = Number(inPesoFinalBoi.value);


    if (inIdentBoi.value == "") {
        alert("Atenção!\n\nDigite um identificador válido para adicionar um novo boi ao sistema da fazenda.");
        inIdentBoi.focus();
    } else if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para criar um identificador para o boi a ser adicionado ao sistema da fazenda..");
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

        vetID.push(identificadorBoi);
        vetINI.push(pesoInicialBoi);
        vetFinal.push(pesoFinalBoi);
        vetEspecie.push(especieBoi);

        alert(`O boi com identificador ${identificadorBoi} foi adicionado ao sistema da fazenda com sucesso!
        \nO boi da espécie ${especieBoi} apresentou um peso inicial de ${pesoInicialBoi} arrobas, e após um período de engorda de 100 dias, o seu peso final foi de ${pesoFinalBoi} arrobas.`)

        sessionStorage.setItem("vetID", JSON.stringify(vetID));
        sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
        sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
        sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));

        inIdentBoi.value = "";
        sltEspecieBoi.value = "";
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.value = "";
    }

}

const inIdentRemovBoi = document.getElementById("inIdentRemovBoi");
const outRemoverBoi = document.getElementById("outRemoverBoi");
const btRemoverBoi = document.getElementById("btRemoverBoi");


inIdentRemovBoi.addEventListener("input", function () {
    if (inIdentRemovBoi.value.length === 4) {
        infoRemoverBoi();
    }
});

function infoRemoverBoi() {
    var removerIdent = inIdentRemovBoi.value.toUpperCase();
    var validacaoIdent = /^[a-zA-Z0-9]+$/.test(removerIdent);

    if (!validacaoIdent) {
        alert("Atenção!\n\nUtilize apenas letras e números para pesquisar o identificador do boi a ser removido do sistema da fazenda.");
        inIdentRemovBoi.value = "";
        inIdentRemovBoi.focus();
        outRemoverBoi.innerHTML = "";
        btRemoverBoi.style.display = "none";

    } else if (!vetID.includes(removerIdent)) {
        alert("Atenção!\n\nNenhum boi com este identificador foi encontrado no sistema da fazenda.\n\nTente Novamente.");

        location.reload();
    } else {

        for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
            if (removerIdent == vetID[indBoi]) {
                outRemoverBoi.innerHTML = `<p>Foi encontrado o Boi com Identificador <span style="font-weight: bold; color: red;">${vetID[indBoi]}</span></p>
                <p>Espécie: <span style="font-weight: bold;">${vetEspecie[indBoi]}</span></p>
                <p>Peso inicial: <span style="font-weight: bold;"> ${vetINI[indBoi]} arrobas</span></p>
                <p>Peso Final: <span style="font-weight: bold;">${vetFinal[indBoi]} arrobas</span></p>
                <p> Período de Engorda: 100 dias.</p>`;

                btRemoverBoi.style.display = "inline-block";
            }
        }
    }
}

btRemoverBoi.addEventListener("click", removerBoi);

function removerBoi() {
    var removerIdent = inIdentRemovBoi.value.toUpperCase();

    const motivo = prompt("Digite o motivo da remoção:");

    if (motivo !== null) {
        const confirmacao = confirm(`Deseja finalizar a ação de remoção?\n\nMotivo: ${motivo}`);

        if (confirmacao) {
            for (var indBoi = 0; indBoi < vetID.length; indBoi++) {
                if (removerIdent == vetID[indBoi]) {
                    vetID.splice(indBoi, 1);
                    vetEspecie.splice(indBoi, 1);
                    vetINI.splice(indBoi, 1);
                    vetFinal.splice(indBoi, 1);
                }
            }

            sessionStorage.setItem("vetID", JSON.stringify(vetID));
            sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
            sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
            sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));
            
            alert("Boi removido com sucesso!");

            location.reload();
        }
    } else {
        alert("Atencão!\n\nDigite o motivo de remover o boi do sistema.")
    }
}