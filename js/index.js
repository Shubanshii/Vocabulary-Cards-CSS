// const words = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']
// const definitions = ['Test definition 1.', 'Test definition 2.', 'Test definition 3.', 'Test definition 4.', 'Test definition 5.']
// let looper = 0;
// let definitionRendered = false;

// $('#submit').on('click', function(){
//     $('html').empty();
//     $('html').append(`
//         <h1>${words[0]}</h1>
//     `);
// });

// $(document).click(function(e) { 
//     if(!definitionRendered) {
//         $('html').append(`
//         <h3>${definitions[0]}</h3>
//     `); 
//     }
//  });

// state holds the words and their definitions
let placeholderVal = 0;

let state = {
	words: []
};

function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;
	// console.log(currentIndex)
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	// console.log(array)
	return array;
  }

  function ifFormEmpty() {
	alert('Please enter words before beginning.');
	location.reload();
}

/*empties screen to make room for the next screen's content.  Empties children, descendants and texts from body */
function emptyScreen() {
	$("body").empty();
	// $("body").html("<h1>TESTING!!!</h1>")
}

function watchRestart() {
	$('#home').on('click', function() {
		location.reload();
	});
}

function displayLastResult() {
	console.log("display last result")
	let curTerm = state.words[placeholderVal].word;
	var cardTemplate = `
		<div id="vocabulary-word">
			<h1>${curTerm}</h1>
		</div>
		<div id="definitions">
			<ul></ul>
		</div>`;

		
		$('body').html(cardTemplate);


		for(var x=0; x < state.words[placeholderVal].definitions.length; x++){
			// console.log("logging definitions", state.words[placeholderVal].definitions[x])
			$('ul').append('<li class="card-text"><h3>' + state.words[placeholderVal].definitions[x] + '<h3></li>');
			// $('#definitions').append('<h1>Testy</h1>');
		}
					$('#vocabulary-word').css({"display": "block", "animation": "angle-move-black-blue 4s",
			"-webkit-animation": "angle-move-black-blue 4s",
			"-moz-animation": "angle-move-black-blue 4s",
			"-ms-animation": "angle-move-black-blue 4s",
			"-o-animation": "angle-move-black-blue 4s"})
		$('ul').append('<button id="show">Show</button>');
		$('#show').on('click', function(){
			$('#vocabulary-word').css({"display": "block", "animation": "angle-move-black-blue 4s",
			"-webkit-animation": "angle-move-black-blue 4s",
			"-moz-animation": "angle-move-black-blue 4s",
			"-ms-animation": "angle-move-black-blue 4s",
			"-o-animation": "angle-move-black-blue 4s"})
			// console.log("testing show button")
			// $('h1').removeClass('hidden');
			$('#show').replaceWith('<button id="home">Home Page</a>');
			watchRestart();
	
		});
		// $('ul').append('<a href="#" class="show btn btn-indigo">Show</a>');
		// $('.show').on('click', function(){
		// 	$('h1').removeClass('hidden');
		// 	$('.show').replaceWith('<a href="#" class="next btn btn-red">Next</a>');
		// 	watchNext();
	
		// });
		// <li>Test Def 1</li><li>Test Def 2</li><li>Test Def 3</li>
	// $('body').append("<h1>Sweet!</h1>");
	// var cardTemplate = (
	// 	'<main class="mt-5">' + 
	// 		'<div class="container">' +
	// 			'<div class="row">' + 
	// 				'<div class="col-md-12 mb-4">' +
	// 					'<div class="card">' + 
	// 						'<div class="card-body">' + 
	// 							'<h1 class="card-title hidden">' + curTerm + '</h4>' + 
	// 							'<ul>' + 
	// 							'</ul>' + 
	// 						'</div>' + 
	// 					'</div>' +
	// 				'</div>' +
	// 			'</div>' + 
	// 		'</div>' +
	// 	'</main>'
	// 	);
		
		

}

function watchNext(state) {
	$('#next').on('click', function() {
		placeholderVal++;
		fetchNextDefinitions();
	});
	
}

function displayNextResult() {
	// console.log("display next result")
	let curTerm = state.words[placeholderVal].word;
	var cardTemplate = `
		<div id="vocabulary-word">
			<h1>${curTerm}</h1>
		</div>
		<div id="definitions">
			<ul></ul>
		</div>`;

		
		$('body').html(cardTemplate);


		for(var x=0; x < state.words[placeholderVal].definitions.length; x++){
			// console.log("logging definitions", state.words[placeholderVal].definitions[x])
			$('ul').append('<li class="card-text"><h3>' + state.words[placeholderVal].definitions[x] + '<h3></li>');
			// $('#definitions').append('<h1>Testy</h1>');
		}
		$('ul').append('<button id="show">Show</button>');
		$('#show').on('click', function(){
			$('#vocabulary-word').css({"display": "block", "animation": "angle-move-black-blue 4s",
			"-webkit-animation": "angle-move-black-blue 4s",
			"-moz-animation": "angle-move-black-blue 4s",
			"-ms-animation": "angle-move-black-blue 4s",
			"-o-animation": "angle-move-black-blue 4s"})
			// console.log("testing show button")
			// $('h1').removeClass('hidden');
			$('#show').replaceWith('<button id="next">Next</a>');
			watchNext();
	
		});
		// $('ul').append('<a href="#" class="show btn btn-indigo">Show</a>');
		// $('.show').on('click', function(){
		// 	$('h1').removeClass('hidden');
		// 	$('.show').replaceWith('<a href="#" class="next btn btn-red">Next</a>');
		// 	watchNext();
	
		// });
		// <li>Test Def 1</li><li>Test Def 2</li><li>Test Def 3</li>
	// $('body').append("<h1>Sweet!</h1>");
	// var cardTemplate = (
	// 	'<main class="mt-5">' + 
	// 		'<div class="container">' +
	// 			'<div class="row">' + 
	// 				'<div class="col-md-12 mb-4">' +
	// 					'<div class="card">' + 
	// 						'<div class="card-body">' + 
	// 							'<h1 class="card-title hidden">' + curTerm + '</h4>' + 
	// 							'<ul>' + 
	// 							'</ul>' + 
	// 						'</div>' + 
	// 					'</div>' +
	// 				'</div>' +
	// 			'</div>' + 
	// 		'</div>' +
	// 	'</main>'
	// 	);
		
		
}

/*updates the definitions property of each object in state.words array, so they correspond with the correct word
this function is called as the user displays each word*/
function updateState(data) {
	// console.log('logging data from updatestate', data)
	var curTerm = state.words[placeholderVal].word;
	
	if(data.length===0) {
		alert(`${curTerm} not found`)
		location.reload()
	} 
	else if(data[0].shortdef==undefined) {
		alert(`${curTerm} not found`)
		location.reload()
	} else {
		// state.words[placeholderVal].definitions.push(data.shortdef);
		// is there a way to just add the array all at once instead of iterating 
		// through it?
		for(var i = 0; i < data[0].shortdef.length; i++) {
			state.words[placeholderVal].definitions.push(data[0].shortdef[i])
			// console.log('logging shortdef from inside else statement ', data[0].shortdef[i])
		}
		
	}
	
	if(placeholderVal === state.words.length - 1){
		displayLastResult();
	}else {	
		displayNextResult();
	}
	

}

function getDataFromApi(searchTerm, callback) {
	// THIS APP IS FOR PERSONAL USE.  I BUILT IT TO LEARN HOW TO MAKE API CALLS
	// AND USE THE DATA
	var url = "https://dictionaryapi.com/api/v3/references/learners/json/" + searchTerm + "?key=557292e0-2038-430d-929b-e805b0afd354"

	$.getJSON(url, updateState)
	
}

//grabs definitions from API and initiates callback function
function fetchNextDefinitions() {
	getDataFromApi(state.words[placeholderVal].word, updateState);
}

// creates array of words and definitions
function createWordObjectArray() {
	// const words = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']
	const definitions = ['Test definition 1.', 'Test definition 2.', 'Test definition 3.', 'Test definition 4.', 'Test definition 5.']

	let words = $("input").val().split(/[ ,!.";:-]+/).filter(Boolean);
	// console.log('words var inside createwordobjectarray', words)

	if(words.length === 0) {
		ifFormEmpty();
	}
    for (let i = 0; i < words.length; i++) {
        let word = {
			word: words[i],
			definitions: []
		}
		state.words.push(word);

    }
	// console.log(state)
	shuffle(state.words)

}

//watches for user to hit button to begin project
function watchSubmit() {
	$('input').keypress(function(event) {
		if (event.which === 13) {
			event.preventDefault();
			createWordObjectArray();
			emptyScreen();
			fetchNextDefinitions();
		}
	});
	$('#submit').on("click", function(e) {
		// console.log("testing click")
		e.preventDefault();
		createWordObjectArray();
		emptyScreen();
		fetchNextDefinitions();

	})
}

$(function(){watchSubmit();});