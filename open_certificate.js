//var inp = document.getElementById("open-cer");
var win = document.getElementById("showThis");
var pic = document.getElementById("cer");

//inp.addEventListener("click", show);
win.addEventListener("click", hide);

var cerArr = [
    "https://www.sololearn.com/Certificate/CT-0CPERQ06/png", 
    "https://www.sololearn.com/Certificate/CT-FO2LFDE3/png",
    "https://www.sololearn.com/Certificate/CT-W5KYVFGD/png",
    "https://www.sololearn.com/Certificate/CT-CNHK5W1R/png",
    "https://www.sololearn.com/Certificate/CT-MWZWPDJI/png"
];

function show(i) {
    win.style.display = "block";
    win.style.opacity = "0.95";
    pic.title = "Sololearn Certificate";
    pic.src = cerArr[i];
}

function hide() {
    win.style.display = "none";
}