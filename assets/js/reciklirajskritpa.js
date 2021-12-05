function proveriPreSlanja() {
    proveriImePrezime();
    proveriGrad();
    proveriKolicinu();
    proveriEmail();
    proveriUslove();

    if (proveriImePrezime() && proveriGrad() && proveriKolicinu() && proveriEmail() && proveriUslove()) {

        let ip = document.getElementById("imeprezime").value;
        let grad = document.getElementById("gradovi").value;
        let kolicina = document.querySelector('input[name="kolicina"]:checked').value;
        let email = document.getElementById("email").value;
        window.alert("Prijava je uspešno evidentirana.\n\nOvo su podaci koje ste poslali:\nIme i prezime: " + ip + "\nGrad: " + grad + "\nKoličina: " + kolicina + "\nEmail: " + email);

    }
}

function proveriImePrezime() {
    let x = document.getElementById("imeprezime").value;
    if (x == "") {
        document.getElementById("ipgreska").innerHTML = "Morate uneti ime i prezime.";
        document.getElementById("ipgreska").style.display = "block";
        return 0;
    } else {
        document.getElementById("ipgreska").innerHTML = "";
        document.getElementById("ipgreska").style.display = "none";
        return 1;
    }
}

function proveriGrad() {
    let x = document.getElementById("gradovi").value;
    if (x == "") {
        document.getElementById("ggreska").innerHTML = "Morate izabrati grad.";
        document.getElementById("ggreska").style.display = "block";
        return 0;
    } else {
        document.getElementById("ggreska").innerHTML = "";
        document.getElementById("ggreska").style.display = "none";
        return 1;
    }
}

function proveriKolicinu() {
    let x = document.querySelector('input[name="kolicina"]:checked');
    if (x == null) {
        document.getElementById("kgreska").innerHTML = "Morate izabrati količinu.";
        document.getElementById("kgreska").style.display = "block";
        return 0;
    } else {
        document.getElementById("kgreska").innerHTML = "";
        document.getElementById("kgreska").style.display = "none";
        return 1;
    }

}

function proveriEmail() {
    let x = document.getElementById("email").value;
    if (x == "") {
        document.getElementById("mgreska").innerHTML = "Morate uneti mejl.";
        document.getElementById("mgreska").style.display = "block";
        return 0;
    } else {
        document.getElementById("mgreska").innerHTML = "";
        document.getElementById("mgreska").style.display = "none";
        return 1;
    }
}

function proveriUslove() {
    let x = document.getElementById("slazemse").checked;
    if (x == false) {
        document.getElementById("ugreska").innerHTML = "Ovo polje je obavezno.";
        document.getElementById("ugreska").style.display = "block";
        return 0;
    } else {
        document.getElementById("ugreska").innerHTML = "";
        document.getElementById("ugreska").style.display = "none";
        return 1;
    }
}