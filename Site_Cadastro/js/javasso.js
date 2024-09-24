function calcular(event){
    event.preventDefault();
    var cxnome = document.getElementById("caixa_nome").value;
    var cxplaca = document.getElementById("caixa_placa").value;
    var cxmodelo = document.getElementById("caixa_modelo").value;
    var cxdias = document.getElementById("caixa_dias").value;
    var cxvalor = parseFloat(document.getElementById("caixa_valor").value);

    nome_cliente.value = (`Nome: ${cxnome}`);
    placa_cliente.value = (`Placa: ${cxplaca}`);
    modelo_cliente.value = (`Carro: ${cxmodelo}`);
    dias_cliente.value = (`Vai ficar ${cxdias} dias`);
    valor_cliente.value = (`Total sem desconto: R$${cxvalor}`);
    parseFloat(cxvalor)
    

    if (cxvalor > 150){
        var desconto = cxvalor * 0.1
        var resu = cxvalor - desconto
        desconto_cliente.value = (`Total com desconto 10%: R$${resu}`)
    }
    else{
        desconto_cliente.value = (`Não obteve desconto`)
    }
}

function apagar(){
    document.getElementById("formula").reset();
}

function sair(){
    window.open("", "_self");
    window.close();
}