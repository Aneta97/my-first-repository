//Change the text of the first blue box from Velox to Macrotis
$('#fox1').text('Macrotis')
$("#fox2").css("border", "2px solid purple")
$('p').css('background-color', 'yellow')

color= 'purple'
number= 1000
word= 'uncool'

console.log(color,number, word)

if (color==='purple') {
    $('#fox1').css('background-color','purple')
}

if (number>100) {
    $('#fox2').text("Whoah, that's a big number.")
}

if(word==='cool') {
    $('#fox3').text('Power of DOM')
} else {
    $('#fox3').text(
        $('#fox1').text())
    
}
// zavolej do konzole text foxu 3:
// console.log($('#fox3').text())