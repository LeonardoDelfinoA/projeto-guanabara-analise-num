function calculation() {
    var start = Number(document.getElementById("start").value);
    var end = Number(document.getElementById("end").value);
    var steps = Number(document.getElementById("steps").value);
    var arr = [];
    if (start == '' || end == '') {
        window.alert('[ERRO] Preencha todos os dados!');
        var res = document.getElementById("res");
        res.innerHTML = 'Impossível contar';  
    }
    else if ( start > end) {
        if (steps == ''){
            window.alert('Irei assumir que o passo é 1!');
            steps = 1;
        }
    
        while (start >= end) {
            arr.push(` ${start}`);
            start -= steps;
        }
        var res = document.getElementById("res");
        res.innerHTML = `Contando: ${arr} \u{1F468}`;

    }
    
    else {
        if (steps == ''){
            window.alert('Irei assumir que o passo é 1!');
            steps = 1;
        }
    
        while (start <= end) {
            arr.push(` ${start}`);
            start += steps;
        }
        var res = document.getElementById("res");
        res.innerHTML = `Contando: ${arr} \u{1F44D}`;
    }
}