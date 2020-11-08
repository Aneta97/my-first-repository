
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
   {$('button').css('background-color', 'black', 'color', 'white'),
   $('button').css('color', 'white')})
