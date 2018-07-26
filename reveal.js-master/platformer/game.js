var space = 32

var arrow = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
}

$(document).ready(function () {
    $('#box').hide()
    document.getElementById("musicGame").play()
    updateScore(40)
    animateBirdWings()
    animateCoins()
    animateBombs()
    flyBird()
    walkBombs()
    $(document).keydown(function (event) {
        if (gameStopped == false) {
            var keyCode = event.keyCode || event.which
            if (keyCode == arrow.left) {
                move(false)
            } else if (keyCode == arrow.right) {
                move(true)
            } else if (keyCode == arrow.up) {
                jump()
            }
        }
    })
    detectCollisions()
})

var birdimage = 1
function animateBirdWings() {
    birdimage++
    if (birdimage > 3) {
        birdimage = 1
    }
    $('.bird').css('background-image', 'url(images/bird/bird' + birdimage + '.png')
    setTimeout(animateBirdWings, 100)
}

var coinsimage = 1
function animateCoins() {
    coinsimage++
    if (coinsimage > 6) {
        coinsimage = 1
    }
    $('.coins').css('background-image', 'url(images/coin/coin-' + coinsimage + '.png')
    setTimeout(animateCoins, 100)
}

var bombimage = 1
function animateBombs() {
    bombimage++
    if (bombimage > 5) {
        bombimage = 1
    }
    $('.bomb').css('background-image', 'url(images/bomb/bomb-' + bombimage + '.png')
    setTimeout(animateBombs, 150)
}

function flyBird() {
    $('.bird').each(function () {
        var moveBird = Math.floor(Math.random() * 100)
        $(this).animate({ bottom: (220 + moveBird) + 'px' }, 1000)
        moveBird = Math.floor(Math.random() * 100)
        $(this).animate({ bottom: (220 - moveBird) + 'px' }, 1000, flyBird)
    })
}

function walkBombs() {
    return
    $('.bomb').each(function () {
        var bombLeft = parseInt($(this).attr('left'))
        var moveBomb = Math.floor(Math.random() * 150)
        $(this).animate({ left: (bombLeft + moveBomb) + 'px' }, 1700)
        moveBomb = Math.floor(Math.random() * 150)
        $(this).animate({ left: (bombLeft - moveBomb) + 'px' }, 1700, walkBombs)
    })
}

function move(forward) {
    movePlayer()
    moveBackground(forward)
}

var playerMoving = false
var playerimage = 1
function movePlayer() {
    if (playerMoving) {
        return
    }
    playerimage++
    if (playerimage > 6) {
        playerimage = 1
    }
    playerMoving = true
    $('.player').css('background-image', 'url(images/player/run-' + playerimage + '.png')
    setTimeout(function () {
        playerMoving = false
    }, 100)
}


function jump() {
    $('.player').stop()
    $('.player').css('background-image', 'url(images/player/jump.png')
    $('.player').animate({
        bottom: "250px"
    }, {
            queue: false,
            duration: 500,
            complete: function () {
                $('.player').animate({
                    bottom: "97px"
                }, {
                        queue: false,
                        duration: 500,
                    })
            }
        })

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () { move(true) }, 50 * i)
    }
}

function moveBackground(forward) {
    $('.bomb').stop()
    $('.bomb').animate({
        left: (forward ? "-=20px" : "+=20px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200,
            step: function (now) {
                $(this).attr('left', now)
            },
            complete: function () {
                setTimeout(walkBombs, 1000)
            }
        })

    $('#road-line, #fire-line, #coins-line, .bird').animate({
        left: (forward ? "-=20px" : "+=20px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#tree-line').animate({
        left: (forward ? "-=17px" : "+=17px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#tree-line2').animate({
        left: (forward ? "-=14px" : "+=14px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#tree-line3').animate({
        left: (forward ? "-=12px" : "+=12px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#grass-line').animate({
        left: (forward ? "-=10px" : "+=10px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#grass-line2').animate({
        left: (forward ? "-=12px" : "+=12px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#grass-line3').animate({
        left: (forward ? "-=7px" : "+=7px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
    $('#pillar-line').animate({
        left: (forward ? "-=5px" : "+=5px"),
    }, {
            queue: false,
            easing: "linear",
            duration: 200
        })
}

var score = 0
function updateScore(value) {
    score += value
    $('#score span').text(score)
    if (score <= 0) {
        gameOver()
    }
}

/* Detect collision between two jquery elements */
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

var gameStopped = false
function detectCollisions() {
    if (gameStopped == false) {
        var $player = $('.player')
        $('.fire, .bird, .bomb, .croco').each(function () {
            if (collision($player, $(this))) {
                updateScore(-5),
                    document.getElementById("musicEnnemis").play()

            }
        })

        $('.coins').each(function () {
            if (collision($player, $(this))) {
                $(this).hide()
                updateScore(20)
            }
        })
        setTimeout(detectCollisions, 200)
    }
}

function gameOver() {
    document.getElementById("musicGame").pause()
    gameStopped = true
    $('.player').stop()
    movePlayer()
    $('.player').css({
        'background-image': 'url(images/player/fall.png',
        'width': '67px',
    })
    $('.player').animate({
        bottom: "500px",
        left: "+=50px",
    }, {
            queue: false,
            duration: 400,
            complete: function () {
                $('.player').animate({
                    bottom: "-100px"
                }, {
                        queue: false,
                        duration: 500,
                    })
            }
        })
    $('#box').fadeIn(function () {
        $('#box').effect('shake')
    })
}