var brojSlajda = 1;
prikaziSlajd(brojSlajda);
upisiDatum();

function promeniSlajd(n) {
    prikaziSlajd(brojSlajda += n);
}

function postaviSlajd(n) {
    prikaziSlajd(brojSlajda = n);
}

function prikaziSlajd(n) {
    var i;
    var slajdovi = document.getElementsByClassName("jedanSlajd");
    var krugovi = document.getElementsByClassName("krug");
    if (n > slajdovi.length) {
        brojSlajda = 1
    }
    if (n < 1) {
        brojSlajda = slajdovi.length
    }
    for (i = 0; i < slajdovi.length; i++) {
        slajdovi[i].style.display = "none";
    }
    for (i = 0; i < krugovi.length; i++) {
        krugovi[i].className = krugovi[i].className.replace(" active2", "");
    }
    slajdovi[brojSlajda - 1].style.display = "flex";
    krugovi[brojSlajda - 1].className += " active2";
}

function upisiDatum() {
    var datum = new Date();
    var dan = datum.getDate();
    var mesec = datum.getMonth();
    var godina = datum.getFullYear();
    var d1 = document.getElementById("datum");
    d1.innerHTML = dan + "." + mesec + "." + godina + ".";

    //racunanje kolicine proizvoda
    var sum = dan * 100 + mesec * 10 + godina;
    var d2 = document.getElementById("kolicina");
    d2.innerHTML = sum;

}