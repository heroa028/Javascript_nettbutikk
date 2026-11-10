// Slideshow
let bildeIndeks = 0;
visBilde(bildeIndeks);

function byttBilde(retning) {
    bildeIndeks += retning;
    visBilde(bildeIndeks);
}

function visBilde(indeks) {
    const alleBilder = document.querySelectorAll(".lysbilde");

    if (indeks >= alleBilder.length) {
        bildeIndeks = 0;
    }
    if (indeks < 0) {
        bildeIndeks = alleBilder.length - 1;
    }

    for (let i = 0; i < alleBilder.length; i++) {
        alleBilder[i].style.display = "none";
    }

    alleBilder[bildeIndeks].style.display = "block";
}

