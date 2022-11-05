

function satiPutaSatnica() {
    var satnica = parseInt(document.getElementById("satnica").value);
    var sati = parseInt(document.getElementById("sati").value);
    var zbroj = satnica * sati;
    document.getElementById("demo").innerHTML = zbroj;
    
    //return zbroj;
    //console.log(`Vaša osnovica plaće iznosi: ${zbroj}`)
}



function prekovremeni() {
    var prekovremeni = parseInt(document.getElementById("prekovremeni").value);
    var satnica = parseInt(document.getElementById("satnica").value);
    var zbrojPrekovremenih = satnica * (25/100) + (prekovremeni * satnica);
    document.getElementById("demo1").innerHTML = zbrojPrekovremenih;
    //return zbrojPrekovremenih;
    //console.log(`Vaši prekovremeni iznose: ${zbrojPrekovremenih}`)
}



function putniObrok() {
    var brojRadnihDana = parseInt(document.getElementById("broj-radnih-dana").value);
    var ukupno = brojRadnihDana * 20;
    document.getElementById("demo2").innerHTML = ukupno;
    //return ukupno;
    //console.log(`Vaši putni troškovi i topli obrok iznose: ${ukupno}`)
}



function demos() {
    var dem = parseInt(document.getElementById("demo").value);
    var dem1 = parseInt(document.getElementById("demo1").value);
    var dem2 = parseInt(document.getElementById("demo2").value);
    var zbrajanje = dem + dem1 + dem2;

    //console.log(zbrajanje)
    //console.log(typeof zbrajanje)
    document.getElementById("demo3").innerHTML = zbrajanje;
}

function ukupnaPlaca() {
    satiPutaSatnica();
    prekovremeni();
    putniObrok();
    demos();
    //console.log(prva)     
    //console.log(`Vaša ukupna plaća iznosi: ${prva} + ${druga} + ${treca}`)
}