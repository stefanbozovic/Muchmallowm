function meni() {
    var x = document.getElementById("navlinkovi");
    if (x.className === "linkovi") {
        x.className += " mobilnaverzija";
    } else {
        x.className = "linkovi";
    }

    var i = document.getElementById("meniIkonica");
    if (i.className === "ikonica") {
        i.className += " iks";
    } else {
        i.className = "ikonica";
    }
}

function promeniSrce() {
    var x = document.getElementById("srce");
    if (x.className === "srce") {
        x.className += " crveno";
        var y = document.getElementById("brojLajkova");
        y.innerHTML = parseInt(y.innerHTML) + 1;
    } else {
        x.className = "srce";
        var y2 = document.getElementById("brojLajkova");
        y2.innerHTML = parseInt(y2.innerHTML) - 1;
    }
}



function idiNaVrh() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}