$(document).ready(function() {

	var selCharPhase = true;
	var selOppPhase = false;
	var attOppPhase = false;
	var enemiesDefeated = 0;
	
	var characters = {
		char1: {
			name: 'char1',
			HP: 120,
			Attack: 15
		},
			
		char2: {
			name: 'char2',
			HP: 100,
			Attack: 5
		},

		char3: {
			name: 'char3',
			HP: 150,
			Attack: 20
		},

		char4: {
			name: 'char4',
			HP: 180,
			Attack: 25
		},
	}
	//console.log(characters.char1.name);
	//console.log(characters['char1'].name);

	var charArray = ['.char1', '.char2', '.char3', '.char4'];
	//console.log('array is ' + charArray);
	var clicks = 0;
	var charAttack = 8;
	var btnClass = '';
	var charSelected = '';
	var oppSelected = '';

	$('#char1HP').append(characters.char1.HP);
	$('#char2HP').append(characters.char2.HP);
	$('#char3HP').append(characters.char3.HP);
	$('#char4HP').append(characters.char4.HP);
	
 //    window.onload = function () {
	// 	startGame();
	// };

	function startGame () {
		console.log('startGame function has been executed');
		location.reload();

	//set character objects with name, HP, and Attack properties.

		// characters.char1 = {
		// 	name: 'char1',
		// 	HP: 120,
		// 	Attack: 15
		// }	
		// characters.char2 = {
		// 	name: 'char2',
		// 	HP: 100,
		// 	Attack: 5
		// }

		// characters.char3 = {
		// 	name: 'char3',
		// 	HP: 150,
		// 	Attack: 20
		// }

		// characters.char4 = {
		// 	name: 'char4',
		// 	HP: 180,
		// 	Attack: 25
		// }
		//console.log('objects have been defined: ' + objChar1.name + objChar2.name + objChar3.name + objChar4.name);

	};
	//this function sets the clicked buttons class in var btnClass (ex. click button.char1 - btnClass: .char1)
    $(document).on('click', 'button', function() { 
    	//code goes here, this refers to the button that was clicked
    	var btnClass = '.' + $(this).attr('class');
    	var objSelector = $(this).attr('class');
    	//console.log('Clicked button class: ' + btnClass);
    	//objSelector = 'characters' + btnClass + '.name';
    	//console.log(characters.attr('char1'));

    	if (selCharPhase) {
			selectChar(btnClass);
			charSelected = btnClass;
			selOppPhase = true;
			selCharPhase = false;
			console.log('charSelected: ' + charSelected);
			console.log('Entered the Select Opponent Phase');

		} else{
			if (selOppPhase) {
				if (btnClass !== charSelected) {
					selectOpponent(btnClass);
					oppSelected = btnClass;
					attOppPhase = true;
					selOppPhase	= false;
					console.log('oppSelected: ' + oppSelected);
					console.log('Entered Attack Opponent Phase');
				}
			} else{
				if (attOppPhase) {

			//	1. click will either alert the message to click on opponent portrait or execute attOpponent function
			//	  if .opponent char HP > 0
			//		if btnClass = div.opponent.button.class
			//			attOpponent();
			//			charAttack = charAttack + 8;
			//				
			//		else
			//			alert(click on opponent portrait to atack. Best to take on one enemy at a time)
			//
			//	  else (opponent is dead)
			//		delete .opponent button from html
			//		buttons deleted ++;
			//		attOppPhase = false;
			//		if buttons deleted < 3
			//			selOppPhase = true;
			//			attOppPhase = false;
			//		else 
			//			alert(you win!)
			//			restart game
					if (characters[objSelector].HP > 0) {

						if (btnClass === oppSelected) {
							//attOpponent();
							//console.log('successfully attacked opponent');
							attOpponent();
							//console.log('opponents HP after attopponent function is ' + characters[objSelector].HP);
							charAttack = charAttack + 8;
						} else{
							alert('Best to take on one enemy at a time, tough guy.  Click on your opponent\'s portrait to attack them!');
						}
					} else{
						console.log('opponent has died!');
					}
					//attOpponent();
				}
			}
		}
    	
    });
	//console.log('clicks 0: ' + clicks + ' and oppSelected ' + oppSelected);

	// if selCharPhase is true :
	//	1. click will call selectChar() to move all other objects to div.opponents
	//		selectChar(btnClass) - all other buttons other than clicked button will move to .opponents div
	//		selCharPhase = false;
	//		selOppPhase = true;
	//		

	// if selOppPhase is true : 
	//	1. click will call selectOpp() function
	//		selectOpp(btnClass) - the button with btnClass will move to .opponent div
	//		selOppPhase = false;
	//		attOppPhase = true;
	//
	// if attOppPhase is true : 
	//	1. click will either alert the message to click on opponent portrait or execute attOpponent function
	//	  if .opponent char HP > 0
	//		if btnClass = div.opponent.button.class
	//			attOpponent();
	//				
	//		else
	//			alert(click on opponent portrait to atack. Best to take on one enemy at a time)
	//
	//	  else (opponent is dead)
	//		delete .opponent button from html
	//		buttons deleted ++;
	//		attOppPhase = false;
	//		if buttons deleted < 3
	//			selOppPhase = true;
	//			attOppPhase = false;
	//		else 
	//			alert(you win!)
	//			restart game
	//		
	// if (oppSelected === false) {

	// 	$('button').on('click', clickCounter);
	// 	console.log('oppSelected at check is ' + oppSelected);
	// } else {
	// 	return false;
	// 	console.log('oppSelected at check is ' + oppSelected);
	// }


	



	// function clickCounter() {
	// 	clicks++;
	// 	console.log('Amount of clicks from clickCounter is now ' + clicks);
	// 	var btnClass = '.' + $(this).attr('class');
	// 	console.log('btnClass is '+ btnClass);
	// 	if (clicks === 1) {
	// 		selectChar(btnClass);
	// 	}

	// 	if ((clicks > 1) && (oppSelected === false)) {
	// 		//oppSelected = selectOpponent(btnClass)
	// 		oppSelected = selectOpponent(btnClass);
	// 		console.log('oppSelected set successfully set to ' + oppSelected);
			
	// 	} else if ((clicks > 1) && (oppSelected === true)) {

	// 		// if opponent div is clicked execute attOpponent function
	// 		$('div.opponent').find('button').click(attOpponent(btnClass));
	// 		// $('div.opponent').find('button').click(function(e) {
	// 		// 	console.log('successfully attacked the opponent!');
	// 		// 	//attOpponent();
	// 		// });

	// 		// else if other buttons are clicked alert('Attack Current Opponent')
	// 		$('div.opponents, div.urCharacter').find('button').click(function() {
	// 			alert('Click on your opponent\'s portrait to attack them!');
	// 		});


	// 	}

	// }

	function selectChar (btnClass) {

				//console.log('btnClass in selectChar function is '+ btnClass);

				for (i = 0; i < charArray.length; i++) {
					if (btnClass !== charArray[i]) {
						var check = charArray[i];
						//console.log('check in for loop is ' + check);
						$(check).prependTo('.opponents');
					}
				}

	};

	function selectOpponent (btnClass) {

		//console.log('btnClass in selectOpponent is '+ btnClass);

		$(btnClass).prependTo('.opponent');
		oppSelected = btnClass;
		//console.log('oppSelected has become: ' + oppSelected);
		return true;
	};

	function attOpponent (btnClass) {
		// 1. match charSelected & oppSelected with corresponding objects.
		// 2. 

		var oppObject = $('div.opponent').find('button').attr('class');
		var charObject = $('div.urCharacter').find('button').attr('class');
		characters[charObject].HP = characters[charObject].HP - characters[oppObject].Attack;
		$('#combatLog').html(' Your attack for ' + charAttack + ' brought opponent\'s HP down to ' + characters[oppObject].HP + ' and their attack for ' + characters[oppObject].Attack + ' brought your HP down to ' + characters[charObject].HP + '.');
		characters[oppObject].HP = characters[oppObject].HP - charAttack;
		$('#char1HP').html(characters.char1.HP);
		$('#char2HP').html(characters.char2.HP);
		$('#char3HP').html(characters.char3.HP);
		$('#char4HP').html(characters.char4.HP);
		if (characters[oppObject].HP <= 0) {
			alert('Nice job, you defeated one, time to select a new opponent!');
			$(oppSelected).remove();
			$('#combatLog').html('');
			enemiesDefeated++;
			console.log('Enemies defeated: ' + enemiesDefeated);
			attOppPhase = false;
			selOppPhase = true;
			console.log('Entered the Select Opponent Phase');
		}

		if (characters[charObject].HP <= 0) {
			alert('Maybe you should rethink your choices, because you are dead, son.');
			$('button').remove();
			startGame();
		}

		if (enemiesDefeated === 3) {
			alert('You actually did it... Nice job, kid!');
			$('button').remove();
			startGame();
		}
		//console.log('objSelect is ' + oppObject + ' and oppHP is ' + oppHP);
			// if attOppPhase is true : 
		// console.log('You have succesfully attacked btnClass '+ btnClass)
		// var charHP = $('.urCharacter').find('button').attr('HP');
		// charAtt;
		// var oppHP = $('.opponent').find('button').attr('HP');
		// var oppAtt = $('.opponent').find('button').attr('Attack');
		// console.log('character HP/Attack is '+ charHP + '/' + charAtt + ' and opponent HP/Att is ' + oppHP + '/' + oppAtt);
		// var newCharHP = charHP - oppAtt;
		// var newOppHP = oppHP - charAtt;

		// console.log('end of attOpponent function: charHP/charAtt ' + newCharHP + '/' + charAtt + ' and enemy HP/att is ' + newOppHP + '/' + oppAtt);
		// $(btnClass).attr({
		// 	HP: parseInt(newOppHP)
		// });
		// $('.urCharacter.button').attr({
		// 	HP: parseInt(newCharHP)
		// });
		// $(btnClass).html($(btnClass)).attr('HP');
		// $('.urCharacter.button').html($('urCharacter.button').attr('HP'));
		// charAtt = charAtt + 8;

	};


});
