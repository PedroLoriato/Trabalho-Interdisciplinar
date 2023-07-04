/*
Descrição:
Programação do site que está em desenvolvimento.

Versão: 1.0 
*/

const inBoi = document.getElementById("inBoi");
const btCalcular = document.getElementById("btCalcular");
const outPesqBoi = document.getElementById("outPesqBoi");

btCalcular.addEventListener("click", calcularPeso);

function calcularPeso() {

    var indPesq = -1
    var Boi = (inBoi.value).toUpperCase();

    if (inBoi.value == "") {
        alert = "Campo Vazio";
        inBoi.focus();

    } else {

        for (let ind = 0; ind < vetID.length; ind++) {
            if (vetID[ind] == Boi) {
                indPesq = ind;
            }
        }
        if (indPesq == -1) {

            alert("Não foi encontrado a Indentificação do Boi!");
            inBoi.value = "";
            inBoi.focus();
        }
        else {
            outPesqBoi.innerHTML = `O Boi com Identificador ${vetID[indPesq]}, chegou a Fazenda com Peso inicial de ${vetINI[indPesq]} arrobas,<br>
                                    e ao final do Período de Engorda, ficou com um peso final de ${vetFinal[indPesq]} arrobas.  `
        }
    }
}