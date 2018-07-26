var nbImages = 21;
var nbDisplay = 5;
var current = 10;


$(document).ready(function () {

	for (var i = 0; i < nbDisplay; i++) {
		$('#carroussel').append("<img src='images2/" + (10 + (current - 2 + i)) + ".jpg' id='img" + i + "' class='carrousel'/>")
		$('#img' + i).css('left', (i * 150) + 'px').css('position', 'absolute')
	}
	$('#img0').css('z-index', '0').css('height', '170').css('top', '570px')
	$('#img1').css('z-index', '2').css('height', '190').css('top', '560px')
	$('#img2').css('z-index', '4').css('height', '200').css('top', '550px')
	$('#img3').css('z-index', '2').css('height', '190').css('top', '560px')
	$('#img4').css('z-index', '0').css('height', '170').css('top', '570px')

	$('#img0').click(left)
	$('#img4').click(right)


	function left() {
		if (current > 2) {
			current--

			$('#img4').remove()
			for (var i = 0; i < nbDisplay; i++) {
				$('#img' + i).animate({ left: '+=150px' }, 100)
			}

			$('.carrousel').each(function (i) {
				$(this).attr('id', 'img' + (i + 1));
				$(this).unbind('click')
			})

			$('#carroussel').prepend("<img src='images2/" + (10 + (current - 2)) + ".jpg' id='img0' class='carrousel'/>")
			$('#img0').css('left', (0 * 150) + 'px').css('position', 'absolute')

			$('#img0').css('z-index', '0').css('height', '170').css('top', '570px')
			$('#img1').css('z-index', '2').css('height', '190').css('top', '560px')
			$('#img2').css('z-index', '4').css('height', '200').css('top', '550px')
			$('#img3').css('z-index', '2').css('height', '190').css('top', '560px')
			$('#img4').css('z-index', '0').css('height', '170').css('top', '570px')

			$('#img0').click(left)
			$('#img4').click(right)
		}
	}



	function right() {
		if (current < 19) {
			current++

			$('#img0').remove()
			for (var i = 0; i < nbDisplay; i++) {
				$('#img' + i).animate({ left: '-=150px' }, 100)
			}

			$('.carrousel').each(function (i) {
				$(this).attr('id', 'img' + i);
				$(this).unbind('click')
			})

			$('#carroussel').append("<img src='images2/" + (10 + (current + 2)) + ".jpg' id='img4' class='carrousel'/>")
			$('#img4').css('left', (4 * 150) + 'px').css('position', 'absolute')

			$('#img0').css('z-index', '0').css('height', '170').css('top', '570px')
			$('#img1').css('z-index', '2').css('height', '190').css('top', '560px')
			$('#img2').css('z-index', '4').css('height', '200').css('top', '550px')
			$('#img3').css('z-index', '2').css('height', '190').css('top', '560px')
			$('#img4').css('z-index', '0').css('height', '170').css('top', '570px')

			$('#img0').click(left)
			$('#img4').click(right)
		}

	}

	function log(s) {
		$("#console").prepend(s + "<br/>");
	}

	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(document).scrollTop() > 50) {
				$('nav').addClass('shrink');
			}
			else {
				$('nav').removeClass('shrink');
			}
		});
	});


});
