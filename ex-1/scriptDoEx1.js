function button() {
    var teste = document.getElementById("resposta");
    if (typeof(teste) != 'undefined' && teste != null){
        var remocaotxt1 = document.getElementById("resposta");
        remocaotxt1.parentNode.removeChild(remocaotxt1);
    }
    var dizer = document.createElement("p");
    dizer.setAttribute("id", "resposta");
    var nascimento = window.document.getElementById("nascimento").value;
    var ano = new Date();
    nascimento = ano.getFullYear() - Number(nascimento);
    var genero = document.querySelector("input[name=genero]:checked");

    if(document.querySelector("input[name=genero]:checked") == null) {
        var conteudo = document.createTextNode(`Informações inválidas!`);
        dizer.appendChild(conteudo);
    }

    else if (nascimento > 0 && nascimento < 121) {
        if (document.getElementById("imagem")) {
            var remocao = document.getElementById("imagem");
            var remocaotxt = document.getElementById("resposta");
            remocaotxt.parentNode.removeChild(remocaotxt);
            remocao.parentNode.removeChild(remocao);
        }
        if (document.getElementById("resultado")) {
            var clean = document.getElementById("resultado");
            clean.parentNode.removeChild(clean);
        }
    
    
        var img = document.createElement("img");
        var recipiente = document.getElementById("secondBox");
        img.setAttribute("id", "imagem");

        if (nascimento > 0 && nascimento <= 15) {
            if (genero.value === "1") {
                genero = "um menino de ";
                img.src = "criancaMas.jpg";
                recipiente.appendChild(img);
            }
            if (genero.value === "0") {
                genero = "uma menina de ";
                img.src = "criancaFem.jpg";

            }
        }
        if (nascimento >= 16 && nascimento <= 55) {
            if (genero.value === "1") {
                genero = "um adulto de ";
                img.src = "HomemAdulto.jpg";
                recipiente.appendChild(img);


            }
        if (genero.value === "0") {
            genero = "uma adulta de ";
            img.src = "MulherAdulta.jpg";
            recipiente.appendChild(img);


        }
        }
        if (nascimento >= 55 && nascimento <= 120) {
            if (genero.value === "1") {
                genero = "um idoso de ";
                img.src = "idoso.jpg";
                recipiente.appendChild(img);


        }
        if (genero.value === "0") {
            genero = "uma idosa de ";
            img.src = "idosa.jpg";
            recipiente.appendChild(img);


        }
        }
        var conteudo = document.createTextNode(`Você é ${genero} ${nascimento} anos!`);
    }
    else {
        var conteudo = document.createTextNode(`Informações inválidas!`);
        var limpo = "1";
    }
    dizer.appendChild(conteudo);
    var second = document.getElementById("secondBox");
    second.appendChild(dizer);
    
        

}