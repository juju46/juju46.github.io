var nbImages = 22
var cases = []
var nbTries = 0
var pause = false

for (var i = 0; i < nbImages; i++) {
    cases.push(i)
}
for (var i = 0; i < nbImages; i++) {
    cases.push(i)
}

function shuffle() {
    for (var i = 0; i < (nbImages * 2); i++) {
        var mixe = Math.floor(Math.random() * (nbImages * 2))

        var tmp;
        tmp = cases[i]
        cases[i] = cases[mixe]
        cases[mixe] = tmp
    }
}

shuffle()

$(document).ready(function () {
    $('#play-again').hide()
    for (var i = 0; i < (nbImages * 2); i++) {
        $('#board').append('<div id="' + i + '" class="card"></div>');
    }
    $('.card').click(function () {
        var $card = $(this)
        if ($card.hasClass('found')) {
            return
        }
        if (pause == true) {
            return
        }
        var noCase = $card.attr('id')
        var noImage = cases[noCase]
        //console.log('noCase=' + noCase + ', noImage=' + noImage)

        $otherCard = $('.try')
        if ($otherCard.length > 0) {
            var noOtherCard = $otherCard.attr('id')
            if (noCase == noOtherCard) {
                return
            }
        }

        $card.addClass('try')
        nbTries++
        $('#tries span').text(nbTries)

        $card.flip({
            direction: 'lr',
            speed: 100,
            onAnimation: function () {
                console.log('onEnd')
                $card.css('background-image', 'url(img/cards/' + noImage + '.png)')
            }
        })

        if ($otherCard.length == 1) {
            var noOtherCard = $otherCard.attr('id')
            var noOtherImage = cases[noOtherCard]
            //console.log('noOtherCard=' + noOtherCard + ', noOtherImage=' + noOtherImage)

            if (noImage === noOtherImage) {
                $card.removeClass('try')
                $otherCard.removeClass('try')
                $card.addClass('found')
                document.getElementById("success").play()
                $otherCard.addClass('found')
                var nbFound = $('.found').length
                $('#score span').text(nbFound)

                if (nbFound == (2 * nbImages)) {
                    document.getElementById("final").play()
                    $('#play-again').show()
                }
            } else {
                $card.addClass('bad')
                $otherCard.addClass('bad')
                document.getElementById("fail").play()
                pause = true
                setTimeout(restarte, 500)

            }
        }
    })


    function restarte() {
        var $badCard = $('.bad')
        $badCard.css('background-image', "")
        $badCard.removeClass('try')
        $badCard.removeClass('bad')
        pause = false
    }
})