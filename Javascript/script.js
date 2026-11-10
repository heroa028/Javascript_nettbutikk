// Henter HTML-elementene vi skal bruke
const container = document.getElementById("Galleri");
const produContainer = document.getElementById("Produ");

// Lager en tom handlekurv
let handlekurv = [];

// VISER ALLE PRODUKTENE I GALLERIET

for (let produkt of produkter) {
  container.innerHTML += `
        <div class="Produkt">
            <h2>${produkt.navn}</h2>
            <img src="${produkt.bilde}" alt="${produkt.navn}">
            <p>Pris: ${produkt.pris} kr</p>
            <p>★★★☆☆ 3.1 (64)</p>
            <button class="kjopKnapp" data-id="${produkt.id}">
                Legg til i handlekurven
            </button>
        </div>
    `;
}

// FINNER ALLE KJØPSKNAPPENE

const knapper = document.querySelectorAll(".kjopKnapp");

// Legger til en funksjon når noen trykker på en kjøpsknapp
knapper.forEach((knapp) => {
 knapp.addEventListener("click", () => {

    // Henter ID-en til produktet
    let id = Number(knapp.dataset.id);

    // Finner produktet
    let valgtProdukt = produkter.find((produkt) => produkt.id === id);

    // Legger produktet til i handlekurven
    handlekurv.push(valgtProdukt);

    // Oppdaterer antallet produkter
    oppdaterAntall();

    // Viser handlekurven på HTML-siden
    visHandlekurv();

    console.log("Valgt produkt id:" + valgtProdukt.id);
    console.log("Du valgte:", valgtProdukt.navn);
});
});

// OPPDATERER ANTALET PRODUKTER I HANDLEKURVEN

function oppdaterAntall() {
  document.getElementById("antallKurv").textContent = handlekurv.length;
}

// VISER PRODUKTENE I HANDLEKURVEN

function visHandlekurv() {
  // Henter HTML-elementene
  produContainer.innerHTML = "";
  const totalContainer = document.getElementById("totalPris");

  // Starter totalprisen på 0
  let total = 0;

  // Går gjennom alle produktene i handlekurven
  for (let produkt of handlekurv) {
    // Viser produktet på nettsiden
    produContainer.innerHTML += `
            <div class="Produkt">
                <h2>${produkt.navn}</h2>
                <img src="${produkt.bilde}" alt="${produkt.navn}">
                <p>Pris: ${produkt.pris} kr</p>
            </div>
        `;

    // Legger sammen prisene
    total += Number(produkt.pris);
  }

  // Viser totalprisen
  totalContainer.innerHTML = `
        <p><strong>Totalt: ${total} kr</strong></p>
    `;
}

// HENTER KNAPPENE OG POPUP-VINDUET

const kurvPopup = document.getElementById("kurvPopup");
const kurvKnapp = document.getElementById("kurvKnapp");
const lukkKurv = document.getElementById("lukkKurv");

// ÅPNER HANDLEKURVEN NÅR MAN TRYKKER PÅ KNAPPEN

kurvKnapp.addEventListener("click", () => {
  // Viser oppdatert innhold i handlekurven
  visHandlekurv();

  // Åpner popup-vinduet
  kurvPopup.style.display = "flex";
});

// LUKKER HANDLEKURVEN NÅR MAN TRYKKER PÅ LUKK

lukkKurv.addEventListener("click", () => {
  // Skjuler popup-vinduet
  kurvPopup.style.display = "none";
});
