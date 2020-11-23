//var newbie=$('#newItem').val(); - není potřeab


//funkce na reakci na kliknutí:
    $('button').on('click', () => { 
        //podfunkce na aktualizaci proměnné:
   var newbie=$('#newItem').val();
        //podfunkce na přidání položky:
        $( "ul" ).append("<li>" + newbie + 
        
        
      //  podfunkce v podfunkci na přidání ikon:
        
        
        ("<div> <img class='delete' src='./ikona_remove.png'></div>") +
        
        ("<div > <img class='select' src='./ikona_check.png'></div>") +
        
        "</li>");
//funkce na nastavení velikosti ikonek:
        $('.delete, .select').css('width', '10px'),
        $('.delete, .select').css('height', '10px');


    //podfunkce na vyprázdnění psacího políčka po odeslání:
    $('#newItem').val('')
    });

    $('div').on('click', '.delete', (event) => {
      //console.log('click');
      //console.log($(event.target).parent().parent());
      $(event.target).parent().parent().remove();
    });
