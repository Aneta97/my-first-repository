//var newbie=$('#newItem').val(); - není potřeab


//funkce na reakci na kliknutí:
    $('button').on('click', () => { 
        //podfunkce na aktualizaci proměnné:
   var newbie=$('#newItem').val();
        //podfunkce na přidání položky:
        $( "ul" ).append("<li>" + newbie + "</li>")
    //podfunkce na vyprázdnění psacího políčka po odeslání:
    $('#newItem').val('')
    })