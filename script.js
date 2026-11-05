const container = document.getElementById("Galleri");
let handlekurv = [];

for (let produkt of produkter){
container.innerHTML += `
<div class="Produkt">
           <h2> ${produkt.navn}</h2>
            <img src="${produkt.bilde}" alt="${produkt.navn}">
            <p>Pris: ${produkt.pris}kr</p>
            <p>★★★☆☆ 3.1 (64)</p>
            <button class="kjopKnapp" data-id="${produkt.id}">Legg til i handlekurven</button>
        </div>
 `;
 }

 const knapper = document.querySelectorAll(".kjopKnapp").forEach((knapp) => {
  knapp.addEventListener("click", () => {
    let id = Number(knapp.dataset.id);
    let valgtProdukt = produkter.find((produkt) => produkt.id === id);
    handlekurv.push(valgtProdukt);
    oppdaterAntall();
    console.log("Valgt produkt id:" + valgtProdukt.id);
    console.log("Du valgte:", valgtProdukt.navn);
  });
});

function oppdaterAntall() {
    document.getElementById("antallKurv").textContent =
    handlekurv.length;
}

