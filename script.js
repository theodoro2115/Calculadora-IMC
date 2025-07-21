function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = document.getElementById('resultado');
    let imagem = document.getElementById('imagem');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        imagem.style.display = "none";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    let imagemSrc = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        imagemSrc = "abaixo_peso.jpg";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
        imagemSrc = "peso_normal.jpg";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
        imagemSrc = "sobrepeso.jpg";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau I";
        imagemSrc = "obesidade1.jpg";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau II (severa)";
        imagemSrc = "obesidade2.jpg";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
        imagemSrc = "obesidade3.jpg";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> - ${classificacao}`;
    
    imagem.src = imagemSrc;
    imagem.style.display = "block";
}
