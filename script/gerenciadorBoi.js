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
        alert("Atenção!\nDigite um identificador válido para adicionar um novo boi ao sistema da fazenda.");
        inIdentBoi.focus();
    } else if (!validacaoIdent) {
        alert("Atenção!\nUtilize apenas letras e números para criar um identificador para o boi a ser adicionado ao sistema da fazenda..");
        inIdentBoi.value = "";
        inIdentBoi.focus();
    } else if (identificadorBoi.length < 4) {
        alert("Atenção!\nDigite 4 caracteres para criar o identificador para o boi a ser adicionado ao sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();
    } else if (vetID.includes(identificadorBoi)) {
        alert("Atenção!\nJá existe um boi com este identificador no sistema da fazenda.");
        inIdentBoi.value = "";
        inIdentBoi.focus();

    } else if (sltEspecieBoi.value == "") {
        alert("Atenção!\nSelecione a espécie do boi a ser adicionado ao sistema da fazenda.");
        sltEspecieBoi.focus();

    } else if (inPesoInicialBoi.value == "") {
        alert("Atenção!\nDigite o peso inicial do boi a ser adicionado ao sistema da fazenda.");
        inPesoInicialBoi.focus();
    } else if (isNaN(pesoInicialBoi)) {
        alert("Atenção.\nDigite apenas números para o peso incial do boi.");
        inPesoInicialBoi.value = "";
        inPesoInicialBoi.focus();
    } else if (pesoInicialBoi > 13) {
        alert("Atenção.\nO peso máximo permitido para o peso inicial é de 13 arrobas.");
        inPesoInicialBoi.value = "";
        inPesoInicialBoi.focus();

    } else if (inPesoFinalBoi.value == "") {
        alert("Atenção!\nDigite o peso final do boi a ser adicionado ao sistema da fazenda.");
        inPesoFinalBoi.focus();
    } else if (isNaN(pesoFinalBoi)) {
        alert("Atenção.\nDigite apenas números para o peso incial do boi.");
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.focus();
    } else if (pesoFinalBoi < 16) {
        alert("Atenção.\nO peso mínimo permitido para o peso final é de 16 arrobas.");
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.focus();

    } else {

        vetID.push(identificadorBoi);
        vetINI.push(pesoInicialBoi);
        vetFinal.push(pesoFinalBoi);
        vetEspecie.push(especieBoi);

        alert(`O boi com identificador ${identificadorBoi} foi adicionado ao sistema da fazenda com sucesso!
        \nO boi da espécie ${especieBoi} apresentou um peso inicial de ${pesoInicialBoi} arrobas, e o seu peso final, após um período de engorda de 100 dias, foi de ${pesoFinalBoi} arrobas.`)

        sessionStorage.setItem("vetID", JSON.stringify(vetID));
        sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
        sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
        sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));
    }
}