var nbImages = 21;
var nbDisplay = 5;
var current = 10;


$(document).ready(function () {

	$('#console').css('position', 'absolute').css('top', 300)

	for (var i = 0; i < nbDisplay; i++) {
		$('#carroussel').append("<img src='images/" + (10 + (current - 2 + i)) + ".jpg' id='img" + i + "'/>")
		$('#img' + i).css('left', (i * 150) + 'px').css('position', 'absolute')

	}
	$('#img0').css('z-index', '0').css('height', '170')
	$('#img1').css('z-index', '2').css('height', '190')
	$('#img2').css('z-index', '4').css('height', '200')
	$('#img3').css('z-index', '2').css('height', '190')
	$('#img4').css('z-index', '0').css('height', '170')

	$('#img0').click(left)
	$('#img4').click(right)


	function left() {
		current--
		$('#img4').remove()
		for (var i = 0; i < nbDisplay; i++) {
			$('#img' + i).animate({ left: '+=150px' }, 'slow')
		}

		$('img').each(function (i) {
			$(this).attr('id', 'img' + (i + 1));
			$(this).unbind('click')
		})

		$('#carroussel').prepend("<img src='images/" + (10 + (current - 2)) + ".jpg' id='img0'/>")
		$('#img0').css('left', (0 * 150) + 'px').css('position', 'absolute')

		$('#img0').css('z-index', '0').css('height', '170')
		$('#img1').css('z-index', '2').css('height', '190')
		$('#img2').css('z-index', '4').css('height', '200')
		$('#img3').css('z-index', '2').css('height', '190')
		$('#img4').css('z-index', '0').css('height', '170')

		$('#img0').click(left)
		$('#img4').click(right)
	}



	function right() {
		current++
		$('#img0').remove()
		for (var i = 0; i < nbDisplay; i++) {
			$('#img' + i).animate({ left: '-=150px' }, 'slow')
		}

		$('img').each(function (i) {
			$(this).attr('id', 'img' + i);
			$(this).unbind('click')
		})

		$('#carroussel').append("<img src='images/" + (10 + (current + 2)) + ".jpg' id='img4'/>")
		$('#img4').css('left', (4 * 150) + 'px').css('position', 'absolute')

		$('#img0').css('z-index', '0').css('height', '170')
		$('#img1').css('z-index', '2').css('height', '190')
		$('#img2').css('z-index', '4').css('height', '200')
		$('#img3').css('z-index', '2').css('height', '190')
		$('#img4').css('z-index', '0').css('height', '170')

		$('#img0').click(left)
		$('#img4').click(right)

	}

	function log(s) {
		$("#console").prepend(s + "<br/>");
	}

	$('#search').click(function () {
		console.log('search: ', $('#motcle').val())
	})
});
