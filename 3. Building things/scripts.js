
jmena = ['Anetka', 'Anežka', 'Radko', 'Anetka Radova', 'Antonín']


jmena.forEach(mojeFunkce);


function mojeFunkce (x) {
    $( "ul" ).append("<li>" + x + "</li>");
    //console.log(x == "Anetka");
    if(x == "Anetka")
    {   
        //console.log($("ul li").last().html());
        $("ul li").last().css('font-weight', 'bold');
    }
}

//první pokus o tučnou Anetku (zatím všechen text tučně):
 //$(".b").css('font-weight: bold')

//druhý pokus s jiným elementem:
//    $('h2').css('color:black')

//třetí pokus:
//    let myElement = 'h2'.style;
// myElement.style.backgroundColor = "#D93600";

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

//   let additionalBlocks = [
//       {
//     title: "Block title 1",
//     text: "Block text 1"
//   },
//   {
//     title: "Block title 2",
//     text: "Block text 2"
//   },
//   {
//     title: "Block title 3",
//     text: "Block text 3"
//   }

// ];

 function PridaniOdstavce (block) {
  //   console.log(block);
    $('body').append('<h2>' + block.title + '</h2>' + '<p>' + block.text + '</p>');
}
 
//console.log(additionalBlock)
 PridaniOdstavce(additionalBlock);
 //additionalBlocks.forEach(PridaniOdstavce);
 
 //Přidej button co po kliknutí něco udělá:
 // a) Analytický způsob:
// $('button').on('click', klikatko);
// function klikatko () 
// {console.log('Yeah, you clicked me')}

// b) syntetický způsob
$('button').on('click', () => {console.log('Yeah, you clicked me')})

$('button.druheTlacitko').on('click', () => {$('button.prvniTlacitko').text('Změna je život')})

$('button.tretiTlacitko').on('click', () => 
   // {$('button').css.text ('background-color: black; color: white')})
   {$('button').css('background-color', 'black'),
   $('button').css('color', 'white')})

// řešení co funguje jen jednou s výchozí hodnotou (tzv. ONLOADOVACÍ hodnotou):
//    - vyřešeno: variabel proměnna musí být uvnitř mojeFunkce, protože existuje jen "operativně" pro účely funkce. mimo spouštění funkce neexistuje, proto musí být uvnitř.
// $('button.druheTlacitko').on('click', () => {
//   var Promenna=$('#myText').val();
//   $('button.druheTlacitko').css('background-color', Promenna);
// })

// // Druhý pokus, nefunguje vůbec: - vyřešeno returnem
// function getValue() {  
// return $('#myText').val()};    
// $('button.druheTlacitko').on('click', () => {$('button.druheTlacitko').css('background-color', getValue()
// )})

// třetí pokus, který se ukázal být opakováním prvního:
  // var Promenna=document.getElementById('myText').val;    
  // $('button.druheTlacitko').on('click', () => {$('button.druheTlacitko').css('background-color', Promenna
  // )})

// script z internetu, kterým někdo řešil, že mu to bralo vpotaz jen onload hodnotu - vyřešeno returnem
// function getValue() {
//   // this line does the magic
//   var theValue = $('#myText').val()
// alert(theValue);
// //return theValue;
// }
// getValue();
// pokus co jsem našla na netu který by měl poznat, jestli bylo na tlačítko kliknuto:
// document.getElementById("'button.druheTlacitko").addEventListener("click", callback, true);

// function callback() {
//    alert("clicked");
//    return false;
// }

//--------------------------------------------------------------------
//Změnit barvu na input a ignorovat další kliknutí:
var clicked = false;

$('button.druheTlacitko').on('click', () => {
  if(clicked == false)
  {

    var Promenna=$('#myText').val();
    $('button.druheTlacitko').css('background-color', Promenna);
    clicked = true;
  }
})


