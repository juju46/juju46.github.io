var nbImages = 21;
var nbDisplay = 5;
var current = 10;


$(document).ready(function () {

	$('#console').css('position', 'center').css('top', 300)

	for (var i = 0; i < nbDisplay; i++) {
		$('#carroussel').append("<img src='images/" + (10 + (current - 2 + i)) + ".jpg' id='img" + i + "'/>")
		$('#img' + i).css('left', (i * 250) + 'px').css('position', 'center')

	}
	$('#img0').css('z-index', '0').css('height', '450')
	$('#img1').css('z-index', '2').css('height', '490')
	$('#img2').css('z-index', '4').css('height', '530')
	$('#img3').css('z-index', '2').css('height', '490')
	$('#img4').css('z-index', '0').css('height', '450')

	$('#img0').click(left)
	$('#img4').click(right)


	function left() {
		if (current > 2) {
			current--
			$('#img4').remove()
			for (var i = 0; i < nbDisplay; i++) {
				$('#img' + i).animate({ left: '+=250px' }, 'slow')
			}

			$('img').each(function (i) {
				$(this).attr('id', 'img' + (i + 1));
				$(this).unbind('click')
			})

			$('#carroussel').prepend("<img src='images/" + (10 + (current - 2)) + ".jpg' id='img0'/>")
			$('#img0').css('left', (0 * 250) + 'px').css('position', 'center')

			$('#img0').css('z-index', '0').css('height', '450')
			$('#img1').css('z-index', '2').css('height', '490')
			$('#img2').css('z-index', '4').css('height', '530')
			$('#img3').css('z-index', '2').css('height', '490')
			$('#img4').css('z-index', '0').css('height', '450')

			$('#img0').click(left)
			$('#img4').click(right)
		}
	}



	function right() {
		if (current < 19) {
			current++
			$('#img0').remove()
			for (var i = 0; i < nbDisplay; i++) {
				$('#img' + i).animate({ left: '-=250px' }, 'slow')
			}

			$('img').each(function (i) {
				$(this).attr('id', 'img' + i);
				$(this).unbind('click')
			})

			$('#carroussel').append("<img src='images/" + (10 + (current + 2)) + ".jpg' id='img4'/>")
			$('#img4').css('left', (4 * 250) + 'px').css('position', 'center')

			$('#img0').css('z-index', '0').css('height', '450')
			$('#img1').css('z-index', '2').css('height', '490')
			$('#img2').css('z-index', '4').css('height', '530')
			$('#img3').css('z-index', '2').css('height', '490')
			$('#img4').css('z-index', '0').css('height', '450')
			$('#img0').click(left)
			$('#img4').click(right)
		}

	}

	function log(s) {
		$("#console").prepend(s + "<br/>");
	}

	/*$('#search').click(function () {
		console.log('search: ', $('#motcle').val())
	})*/
});
