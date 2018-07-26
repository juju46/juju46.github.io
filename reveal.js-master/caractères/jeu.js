var score = 0
var countdown = 100
let isPlayable = true

$(document).ready(function () {
    $('#start').click(function () {
        $('#firstpage').hide()
        $('#score').show()
        $('#countdown').show()

        $('#countdown span').text(countdown)

        decompte()

        $(document).keypress(function (event) {
            if(isPlayable) {
                var caractere = String.fromCharCode(event.which)
                var $letterSpan = $('.char-' + caractere)

                if ($letterSpan.length > 0) {
                    $letterSpan.css({
                        'transform': 'scale(0)',
                        'transform-origin': 'center',
                        'transition-duration': '800ms'
                    })
                    setTimeout(function() {
                        score += $letterSpan.length * 5
                        $('#score span').html(score);
                        $letterSpan.remove()
                    }, 800)
                    
                }
            } else {
                alert(`ARRETE de jouer t'as plus le temps !!!
Score: ${score}`)
            }
        })

    })


    function decompte() {
        countdown--
        if (countdown >= 0) {
            setTimeout(decompte, 1000)
            $('#countdown span').text(countdown)

            var color = chooseColor()
            var caractere = chooseCaractere()
            var $letterSpan = $('<span class="char char-' + caractere + '" style="background-color:' + color + ';">' + caractere + '</span>')
            $('#game').append($letterSpan)
            var top = Math.floor(Math.random() * $(document).height()) - $letterSpan.height()/2
            var left = Math.floor(Math.random() * $(document).width()) - $letterSpan.width()/2
            $letterSpan.animate({ top: top, left: left }, 2000);
            
            $letterSpan.draggable();

        } else {
            $('#countdown h1').text('Le jeu est fini !!!')
            isPlayable = false
        }
    }


    function chooseColor() {
        var colors = 'ABCDEF0123456789'
        var r1 = colors[Math.floor(Math.random() * colors.length)]
        var r2 = colors[Math.floor(Math.random() * colors.length)]
        var g1 = colors[Math.floor(Math.random() * colors.length)]
        var g2 = colors[Math.floor(Math.random() * colors.length)]
        var b1 = colors[Math.floor(Math.random() * colors.length)]
        var b2 = colors[Math.floor(Math.random() * colors.length)]
        var color = '#' + r1 + r2 + g1 + g2 + b1 + b2
        return color
    }

    function chooseCaractere() {
        var caractere = 'azertyuiopqsdfghjklmwxcvbn'
        var rand = caractere[Math.floor(Math.random() * caractere.length)]
        return rand



    }

})
