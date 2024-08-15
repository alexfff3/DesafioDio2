let elo = ["ferro", "bronze", "prata", "ouro", "diamante", "lendario", "imortal"];

function ranking(exp) {
    if (exp <= 10) {
        return elo[0];
    } else if (exp >= 11 && exp <= 20) {
        return elo[1];
    } else if (exp >= 21 && exp <= 50) {
        return elo[2];
    } else if (exp >= 51 && exp <= 80) {
        return elo[3];
    } else if (exp >= 81 && exp <= 90) {
        return elo[4];
    } else if (exp >= 91 && exp <= 100) {
        return elo[5];
    } else if (exp >= 101) {
        return elo[6];
    }
}

function saldoDeVitorias(vitoria, derrota) {
    return vitoria - derrota;
}

console.log("O Heroi tem um saldo de vitorias " + saldoDeVitorias(80, 11) + " e esta no nivel de " 
    + ranking(saldoDeVitorias(80, 11)));
