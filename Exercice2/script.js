// Chargement

let text = ["", ".", "..", "..."];
    let compte = 0;
    let element = document.getElementById("changeText");
    setInterval(change, 300);
    function change() {
     element.innerHTML = text[compte];
        compte++;
        if(compte >= text.length) { compte = 0; }
    }