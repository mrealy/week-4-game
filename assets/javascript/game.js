


// $('.char1').on("click", function() {
// 	$('.char2').append('.opponents');
// 	$('.char3').append('.opponents');
// 	$('.char4').append('.opponents');
// 	console.log('.char1');
// });

//runs through all the class names in the charArray array
//if class of button clicked is equal to class name in array
// for (i = 0; i < charArray.length; i++) {
// 	if(buttonclicked === charArray[i]) {
// 		var newString = '\'' + charArray[i] + '\''
// 		$(!newString)
// 	}
// }

$(document).ready(function() {

	var charArray = ['.char1', '.char2', '.char3', '.char4'];
	console.log('array is ' + charArray);
	var clicks = 0;

	console.log('number of clicks are ' + clicks);

	function startGame () {

	//set properties

		$('.char1').attr({
			name: 'char1',
			HP: 120,
			Attack: 15
		});	

		$('.char2').attr({
			name: 'char2',
			HP: 100,
			Attack: 5
		});

		$('.char3').attr({
			name: 'char3',
			HP: 150,
			Attack: 20
		});

		$('.char4').attr({
			name: 'char4',
			HP: 180,
			Attack: 25
		});

		// print HP to button objects
		$('.char1').html($('.char1').attr('HP'));
		$('.char2').html($('.char2').attr('HP'));
		$('.char3').html($('.char3').attr('HP'));
		$('.char4').html($('.char4').attr('HP'));

	};

	function clickCounter() {
		clicks++;
		console.log('Amount of clicks from clickCounter is now ' + clicks);
	};

	function selectChar (button) {

		if (clicks === 1) {
			$('button').click(function() {

				var btnClass = '.' + $(this).attr('class');
				//console.log('btnClass is '+ btnClass);

				for (i = 0; i < charArray.length; i++) {
					if (btnClass !== charArray[i]) {
						var check = charArray[i];
						//console.log('check in for loop is ' + check);
						$(check).prependTo('.opponents');
					}
				}
			});
		}
		console.log ('amount of clicks is ' + clicks);
	};

	function selectOpponent (button) {

		$('button').click(function() {

			var btnClass = '.' + $(this).attr('class');
			console.log('btnClass is '+ btnClass);

			$(this).prependTo('.opponent');

		})
	};

	window.onload = function () {
		startGame();
	};
});
