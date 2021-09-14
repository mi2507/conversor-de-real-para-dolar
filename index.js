function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolar = parseFloat(valor)

    let valorEmReal = valorEmDolar * 5;

    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O valor em real é R$:" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}   