// pokus přidat event listener č.1: (ukázalo se že je nějaká chyba s getelementSbyTAGNAME)


// kliknuti.addEventListener("click", myFunction);

var PocetKliknuti = 0;
var kliknuti = document.getElementById("but");
var ZobrazeniPoctu = document.getElementById("displayCount");

kliknuti.onclick = function(){
    PocetKliknuti++;
    ZobrazeniPoctu.innerHTML = PocetKliknuti;
  }

  dec.onclick = function(){
    PocetKliknuti--;
    ZobrazeniPoctu.innerHTML = PocetKliknuti;  }

// pokus přidat event listener č.2, taky funkční, taky oblšlehlý:
// document.getElementById("but").addEventListener("click", function() {
//     alert("Hello World!");
//   });