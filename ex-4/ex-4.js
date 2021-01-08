function tabuada() {
    var startnum = Number(document.getElementById("input").value);
    var outerspace = document.getElementById("list");
    outerspace.innerText = null;
    if (startnum == 0) {
        window.alert("Por favor, digite um número!")
    }
    else {
        for (var i = 1; i <= 10; i++) {
            var option = document.createElement("option");
            option.value = startnum * i;
            option.text = `${startnum} * ${i} = ${option.value}`;
            outerspace.appendChild(option);
        }
    }
}