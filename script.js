

function satiPutaSatnica() {
    var satnica = document.getElementById("satnica").value;
    var sati = document.getElementById("sati").value;
    var zbroj = satnica * sati;
    
    console.log(zbroj)
}

function prekovremeni() {
    var prekovremeni = document.getElementById("prekovremeni").value;
    var satnica = document.getElementById("satnica").value;
    var zbrojPrekovremenih = (25 / 100) * prekovremeni + satnica;
    
    console.log(zbrojPrekovremenih)
}

function putniObrok() {
    var brojRadnihDana = document.getElementById("broj-radnih-dana").value;
    var ukupno = brojRadnihDana + 20;

    console.log(ukupno)
}