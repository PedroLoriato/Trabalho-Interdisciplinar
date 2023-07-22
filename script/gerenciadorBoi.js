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

    } else if (inPesoFinalBoi.value == "") {
        alert("Atenção!\nDigite o peso final do boi a ser adicionado ao sistema da fazenda.");
        inPesoFinalBoi.focus();
    } else if (isNaN(pesoFinalBoi)) {
        alert("Atenção.\nDigite apenas números para o peso incial do boi.");
        inPesoFinalBoi.value = "";
        inPesoFinalBoi.focus();
    } else {

        vetID.push(identificadorBoi);
        vetINI.push(pesoInicialBoi);
        vetFinal.push(pesoFinalBoi);
        vetEspecie.push(especieBoi);

        alert(`O boi com identificador ${identificadorBoi} foi adicionado ao sistema da fazenda com sucesso!
        \nO boi da espécie ${especieBoi} apresentou um peso inicial de ${pesoInicialBoi} arrobas, e o seu peso final, após um período de engorda de 100 dias, foi de ${pesoFinalBoi} arrobas.`)

    }
}