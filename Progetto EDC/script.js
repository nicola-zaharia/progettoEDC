document.getElementById("rifiuti-get-started").addEventListener("click",showTimeline);
document.getElementById("ecosistemi-get-started").addEventListener("click",showCards);

let arrayImg = ["img/curiosita1.jpg","img/curiosita2.jpg","img/curiosita3.jpg","img/curiosita4.jpg","img/curiosita5.jpg","img/curiosita6.jpg","img/curiosita7.jpg","img/curiosita8.jpg","img/curiosita9.jpg"];
let arrayCuriosita = ["La <b>rafflesia</b> è un fiore che può misurare un metro di diametro e ha un odore di carne marcia, oltre ad avere un colore rosso intenso e una consistenza carnosa e ruvida. Si trova nel sud est asiatico e nell'area amazzonica del Brasile.",
                    "Solo nel <b>Rio delle Amazzoni</b> vive 1/3 di tutte le specie della Terra, il che significa che è il luogo con la più grande biodiversità al mondo, a meno che non lo sappiamo per ora.", 
                    "Le <b>sequoie</b> sono gli alberi più alti e più antichi della Terra. Si sa che vivono migliaia di anni, si ritiene che il più vecchio abbia 3.200 anni. Per quanto riguarda la sua altezza, questo è di solito spettacolare e, in effetti, l'albero vivente più alto del mondo è una sequoia rossa alta 115, 55 metri.",
                    "L'albero che cresce più rapidamente è uno che tutti conosciamo ma pochi conoscono questo dettaglio al riguardo: l'<b>eucalipto</b>. Si trova attualmente in varie parti del mondo, ma dove si trova di più è in Australia ed è la principale fonte di cibo per i koala. L'eucalipto può crescere di 10 metri in 1 anno e può raggiungere più di 60 metri per tutta la sua vita.",
                    "Se si ha il coraggio di strofinare il naso a uno <b>squalo</b>, questo può cadere in trance e diventare assolutamente innocuo!",
                    "L'animale con più denti è il <b>pesce gatto</b>. In particolare, ha 9.280 denti! Esatto, questo pesce che vive in Asia e in America è quello con i denti più completi, superando di gran lunga anche gli squali.",
                    "Il fungo <b>Armillaria Ostoyae</b> è l'organismo vivente più grande della Terra: un suo esemplare trovato in Oregon aveva 2400 anni e copriva ben 8,8 chilometri quadrati!",
                    "Questa <b>ameba</b>, per nutrirsi, fa un buco nell'alga, ci infila il suo tentacolo e ne tira fuori il contenuto... non a caso si chiama Vampyrella!", 
                    "L'animale più veloce del mondo è il <b>falco pellegrino</b> che può raggiungere una velocità di 360 km/h, mentre il ghepardo può raggiungere i 115 km/h."];
createCard();
//Funzione per tornare in alto:
let btn_back_to_top = document.getElementById("backToTop");
btn_back_to_top.addEventListener("click", backTop);

let logo = document.querySelectorAll(".logo"); 
logo.forEach(function(e) {
    e.addEventListener("click", showHome); });

//---------------------------------------------
function reveal(){
    var reveals = document.querySelectorAll("section");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        //getBoundingClientRect() --> altezza della section
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
//----------------------------------------------
function backTop() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

let timeline = document.getElementById("timeline");
let front = document.getElementById("front");
let homepage = document.getElementById("homepage");
let decomp = document.getElementById("decomposizione");

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
var date = new Date();

let arrRifiuti = [["Fazzoletto di carta", "4 settimane", "4.97 milioni di tonnellate annue"], ["Giornale", "6 settimane", "1.6 milioni di tonnellate annue"], ["Fiammifero", "6 mesi", "8 milioni di tonnellate annue"], ["Stoffa", "10 mesi", "62 milioni di tonnellate annue"],
    ["Mozzicone", "1 anno", "766mila tonnellate annue"], ["Gomma da masticare", "5 anni", "560 mila tonnellate annue"], ["lattina alluminio", "10 anni", "31 milioni di tonnellate annue"], 
    ["Cotton fioc", "30 anni", "50 milioni di tonnellate annue"], ["Sacchetto di plastica", "500 anni", "86 mila tonnellate annue"], 
    ["Accendino", "500 anni", "22.5 mila tonnellate annue"], ["Tessuto sintetico", "500 anni", "60 milioni di tonnellate annue"], ["Pannolino", "500 anni", "30 milioni di tonnellate annue"],
    ["Scheda telefonica", "1000 anni", "8.2 miliardi di schede nel mondo"], ["Bottiglia di vetro", "1000 anni", "570 mila tonnellate annue"], ["Contenitore di polistirolo", "1000 anni", "80 milioni di tonnellate annue"], 
    ["Bottiglia di plastica", "MAI completamente", "indefinito", "150 milioni di tonnellate annue"]];

function showTimeline() {
    front.style.display = "none";
    homepage.style.display = "none";
    decomp.style.display = "flex";
    generateTimeline();

    backTop();
}

function generateTimeline() {
    for (i = 0; i < arrRifiuti.length; i++) {
        let classe = i%2 == 0 ? "left" : "right";
        timeline.innerHTML += 
            `<div class = "container ${classe}">
                <div class = "content">
                    <h2>${arrRifiuti[i][0]}</h2>
                    <p>${arrRifiuti[i][1]}</p>
                    <p>${arrRifiuti[i][2]}</p>
                </div>
            </div>`;
        }
}

let buttonHome = document.querySelectorAll(".home");
buttonHome.forEach(function(e) {
    e.addEventListener("click", showHome); });

function showHome() {
    indiceDomanda = 0
    score = 0;
    front.style.display = "flex";
    homepage.style.display = "flex";
    decomp.style.display = "none";
    rifiutiGame.style.display = "none";
    cardEcosistemi.style.display = "none";

    backTop();
}

let arrDomandeRifiuti = [{"domanda" : "I rifiuti vengono classificati in base alla loro origine in", "risposte" : ["Vegetali e animali", "Pericolosi e non pericolosi", "Riciclabili e non riciclabili", "Urbani e speciali"], 
    "spiegazione" : "I rifiuti sono classificati, in base alla loro origine, in rifiuti urbani e speciali. I rifiuti sono anche suddivisi, in base alla loro pericolosità, in rifiuti pericolosi e non pericolosi."},
{"domanda" : "I rifiuti pericolosi derivano da", "risposte" : ["Ospedali", "Lavorazioni artigianali", "Sostanze tossiche e nocive", "Rifiuti domestici e resti vegetali"], 
    "spiegazione" : "I rifiuti pericolosi sono tutti i rifiuti che contengono sostanze tossiche o nocive per l’uomo e per l’ambiente, come per esempio batterie, pile, farmaci, oli usati, pannelli contenenti amianto."},
{"domanda" : "Come si possono ridurre i rifiuti?", "risposte" : ["Utilizzando materie prime-secondarie", "Incentivando le aziende a sostenere ritmi di produzione elevati", 
    "Realizzando oggetti e utensili usa e getta", "Preferire le confezioni monodose"], "spiegazione" : "Contenendo la produzione di rifiuti e aumentando la raccolta differenziata, con relativo recupero, si può limitare la realizzazione di discariche e di inceneritori con conseguente vantaggio sulla tutela dell'ambiente."},
{"domanda" : "Cos'è l'Acquisto Verde (GPP)?", "risposte" : ["L'acquisto di un albero per prevenire la deforestazione", "L'acquisto di prodotti realizzati in materiale biodegradabile o riciclato", 
    "L'acquisto di prodotti riciclabili ad alto impatto ambientale", "L'acquisto di approvvigionamenti pubblici"], 
    "spiegazione" : "L'acquisto di  prodotti  e  beni  realizzati  con  materiale  riciclato o  comunque  a basso  impatto ambientale,  da  parte  delle  Pubbliche  Amministrazioni,  viene definito Acquisto  Verde - GPP."},
{"domanda" : "La raccolta differenziata ha lo scopo di", "risposte" : ["Separare i rifiuti per semplificare il loro riciclaggio", "Raccogliere rifiuti simili per lasciarli decomporre in grandi masse",
    "Dividere i rifiuti urbani da quelli speciali", "Separare rifiuti pericolosi e non pericolosi"], 
    "spiegazione" : "Raccolta  differenziata  significa  separare  i  rifiuti  in  tipi  differenti,  direttamente alla produzione degli  stessi.  Tale  separa zione  riveste un  ruolo  importante  nella  gestione  dei rifiuti  urbani,  sia  perché  rende  più  facile  il  riciclaggio  degli  stessi,  sia  perché  limita  il  ricorso alle discariche a  cielo aperto."},
{"domanda" : "Cos'è il Compost?", "risposte" : ["Il gas prodotto dai rifiuti umidi nelle discariche a cielo aperto", "Un fertilizzante chimico", 
    "Un rifiuto secco, che produce biogas se lasciato decomporre", "Un concime e fertilizzante prodotto dalla parte umida dei rifiuti organici"],
    "spiegazione" : "Il COMPOST   è un  concime utile  per  la  coltivazione di  vegetali  e  di  fiori,  per  l'agricoltura  e per  l'allevamento  degli  animali, e  come  fertilizzante  in  genere per  uso esterno  alle abitazioni.  L'uso  del COMPOST  riduce  quello di  fertilizzanti  chimici,  maggiormente dannosi per  la  salute."},
{"domanda" : "La produzione su scala industriale della carta deriva da", "risposte" : ["Cotone", "Fibre della cellulosa", "Seta", "Panni di stoffa e stracci"],
 "spiegazione" : "Molti  non  sanno  che  la  carta può  essere  fatta a  partire  dal  riso,  dal  lino,  dal  cotone,  dalla seta,  dai  panni  di  stoffa e dagli  stracci,  dal  granturco,  dal  luppolo,  dalle alghe e  da  un   numero  infinito di  altri  materiali.  La  produzione  su  scala  industriale  utilizza  tuttavia prevalentemente  le  fibre  della  cellulosa."},
{"domanda" : "Il PET", "risposte" : ["Viene usato come contenitore dei detersivi", "Se riciclato viene utilizzato per contenitori e fibre per imbottitura", 
    "Se riciclato è usato prevalentemente nell'edilizia", "Viene usato per bicchieri di plastica ed imballaggi"],
    "spiegazione" : "Il PET  (polietilene  tereftalato) viene usato per le bottiglie in plastica per alimenti; Se riciclato è usato per  contenitori, fibre per imbottitura, interni delle autovetture, accessori vari e materiale in tessuto-non tessuto."}];
let soluzioni = [3,2,0,1,0,3,1,1];
var indiceDomanda = 0;
var score = 0;

document.getElementById("go-rifiuti-game").addEventListener("click", generateRifiutiGame);
let rifiutiGame = document.getElementById("rifiuti-game");
function generateRifiutiGame() {
    rifiutiGame.style.display = "flex";
    decomp.style.display = "none";
    document.getElementById("quiz-rifiuti").children[0].innerHTML = arrDomandeRifiuti[indiceDomanda]["domanda"];
    document.getElementById("quiz-rifiuti").children[1].innerHTML = arrDomandeRifiuti[indiceDomanda]["risposte"][0];
    document.getElementById("quiz-rifiuti").children[2].value = arrDomandeRifiuti[indiceDomanda]["risposte"][0];
    document.getElementById("quiz-rifiuti").children[3].innerHTML = arrDomandeRifiuti[indiceDomanda]["risposte"][1];
    document.getElementById("quiz-rifiuti").children[4].value = arrDomandeRifiuti[indiceDomanda]["risposte"][1];
    document.getElementById("quiz-rifiuti").children[5].innerHTML = arrDomandeRifiuti[indiceDomanda]["risposte"][2];
    document.getElementById("quiz-rifiuti").children[6].value = arrDomandeRifiuti[indiceDomanda]["risposte"][2];
    document.getElementById("quiz-rifiuti").children[7].innerHTML = arrDomandeRifiuti[indiceDomanda]["risposte"][3];
    document.getElementById("quiz-rifiuti").children[8].value = arrDomandeRifiuti[indiceDomanda]["risposte"][3];

    backTop();
}

document.getElementById("submit").addEventListener("click",checkRadio);
progressBar = document.getElementById("progress-content");
function checkRadio() {
    if (document.getElementById("answer" + soluzioni[indiceDomanda]).checked) {
        score++;
    }
    else showPopup();
    if (indiceDomanda > 6) {
        document.getElementById("submit").value = "Termina il quiz";
        showPopup();
        indiceDomanda++;
        progressBar.style.width = indiceDomanda * 12.5 + "%";
    }
    else {
        indiceDomanda++;
        generateRifiutiGame();
        progressBar.style.width = indiceDomanda * 12.5 + "%";
    }
}

let popup = document.getElementById("popup");
let title = document.getElementById("titolo");
let paragrafo = document.getElementById("spiegazione");
function showPopup() {
    if (indiceDomanda > 6) {
        document.getElementById("submit").style.display = "none";
        document.getElementById("quiz-rifiuti").style.display = "none";
        document.getElementById("game-score").style.display = "flex";
        document.getElementById("game-score").children[0].innerHTML = "Il tuo risultato: " + (score / arrDomandeRifiuti.length * 100) + "%";
    }
    else {
        paragrafo.innerHTML = arrDomandeRifiuti[indiceDomanda]["spiegazione"];
        popup.style.display = "flex";
        document.getElementById("submit").style.pointerEvents = "none";
        buttonHome[1].style.pointerEvents = "none";
    }
}

let x = document.getElementById("close");
x.addEventListener("click", closePopup);
function closePopup() {
    buttonHome[1].style.pointerEvents = "auto";
    document.getElementById("submit").style.pointerEvents = "auto";
    popup.style.display = "none";
}

let video_rifiuti= document.getElementById("video-rifiuti");
let video_ecosistema= document.getElementById("video-ecosistemi");



let cardsContainer = document.getElementById("cards-container");
let cardEcosistemi = document.getElementById("ecosistemi-cards");
function showCards() {
    cardEcosistemi.style.display = "flex";
    front.style.display = "none";
    homepage.style.display = "none";
    
    backTop();
}
function createCard() {
    for (i = 0; i < 3; i++) {
        document.getElementById("first-row").innerHTML +=  `
        <div class = "flip-card">
            <div class = "card">
                <div class = "card-front">
                    <img src="${arrayImg[i]}">
                </div>
                <div class = "card-text">
                    <p>${arrayCuriosita[i]}</p>
                </div>
            </div>
        </div>`;
    }
    for (i = 3; i < 6; i++) {
        document.getElementById("second-row").innerHTML +=  `
        <div class = "flip-card">
            <div class = "card">
                <div class = "card-front">
                    <img src="${arrayImg[i]}">
                </div>
                <div class = "card-text">
                    <p>${arrayCuriosita[i]}</p>
                </div>
            </div>
        </div>`;
    }
    for (i = 6; i < arrayImg.length; i++) {
        document.getElementById("third-row").innerHTML +=  `
        <div class = "flip-card">
            <div class = "card">
                <div class = "card-front">
                    <img src="${arrayImg[i]}">
                </div>
                <div class = "card-text">
                    <p>${arrayCuriosita[i]}</p>
                </div>
            </div>
        </div>`;
    }
}