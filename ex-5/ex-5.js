// variável persiste após o término da função.
let numarr = [];
let erase = 0;
let numresult = 0;




function adicionar() {
    let addnum = Number(document.getElementById("inputnum").value);
    if (addnum < 100 && addnum > 0) {
        //executa a função
        if (!(numarr.includes(addnum))) {
            
            if ( numresult == 1) {
                let delanalise = document.querySelector("#resultbox");
                delanalise.innerHTML = "";
                return numresult --;
            }

            //executa a função  
            numarr.push(addnum);     
            if (erase == 0) {

                document.getElementById("selectbox").options.length = 0;
                erase ++;
            }
            let numsel = document.createElement("option");
            numsel.text = `Você inseriu o número ${addnum}.`;
            selectbox.appendChild(numsel);
            //window.alert(`número novo! ${numarr}`);
        }
        else {
            //número válido já está armazenado
            window.alert("esse número não serve man");
            return;
        }
    }

    else {
        // msg de erro
        window.alert("esse número não serve man");
    }

}

function finalizar() {
    let numtotal;
    
    for (let i = 0; i <= numarr.length; i++) {
        numtotal = i;
    }
    let removal = document.createElement("div");
    removal.setAttribute('class', 'analise');
    resultbox.appendChild(removal);

    let tota = document.createTextNode(`Foram adicionados ${numtotal} números no total.`)
    let total = document.createElement("p");
    total.setAttribute('class', 'analise');
    total.appendChild(tota);
    removal.appendChild(total);
    
    numarr.sort(function(a, b) { return a - b; });
    let numenor = numarr[0];
    let meno = document.createTextNode(`O menor deste conjunto é o número ${numenor}.`);
    let menor = document.createElement("p");
    menor.setAttribute('class', 'analise');
    menor.appendChild(meno);
    removal.appendChild(menor);
    
    
    numarr.sort(function(a, b) { return b - a; });
    let numaior = numarr[0];
    let maio = document.createTextNode(`O maior deste conjunto é o número ${numaior}.`)
    let maior = document.createElement("p");
    maior.setAttribute('class', 'analise');
    maior.appendChild(maio);
    removal.appendChild(maior);

    let numsoma = numarr.reduce( function(a, b) { return a + b;}, 0);
    let media = Math.round(Number(numsoma) / Number(numtotal));
    let med = document.createTextNode(`A média entre entre os números é ${media}`);
    let medi = document.createElement("p");
    medi.setAttribute('class', 'analise');
    medi.appendChild(med);
    removal.appendChild(medi);

    return numresult ++;
}