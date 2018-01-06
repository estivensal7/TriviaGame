let questionsObj = [
	{
		question: "In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?", 
		choices: ["Jim Halpert", "Ryan Howard", "Michael Scott", "Erin Hannon"] , 
		answer: "Ryan Howard"
	},
	{
		question: "In S1E2 'Diversity Day': What famous comedian's stand up routine does Michael imitate?", 
		choices: ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin"] , 
		answer: "Chris Rock"
	},
	{
		question: "In S1E4 'The Alliance': How much money does Michael donate to Oscar's nephew's charity, not realizing it is a walk-a-thon and the amount is per mile?",
		choices: ["$40", "$10", "$25", "100"] , 
		answer: "$25"
	},
	{
		question: "In S2E1 'The Dundies': What Dundie award does Phyllis take home?", 
		choices: ["The Busiest Beaver Dundie", "The Bushiest Beaver Dundie", "Spicy Curry Dundie", "Whitest Sneakers Dundie"] , 
		answer: "The Busiest Beaver Dundie"
	},
	{
		question: "In S2E3 'Office Olympics': What does Pam name 'Box of paper snowshoe racing'?", 
		choices: ["Flonkerton", "Icelandic Snowshoe Racing", "Bixing", "Pegerhosen"] , 
		answer: "Flonkerton"
	},
	{
		question: "In S2E5 'Halloween': What is Jim's costume?", 
		choices: ["'Dave'", "Bookface", "Three Hole Punch Jim", "Rational Customer"] , 
		answer: "Three Hole Punch Jim"
	},
	{
		question: "In S2E7 'The Client': Where do Jan and Michael take Christian, the Lackawanna County rep?", 
		choices: ["Applebee's", "Olive Garden", "Poor Richard's", "Chili's"] , 
		answer: "Chili's"
	},
	{
		question: "In S2E14 'The Carpet': Who is responsible for Michael's foul smelling carpet?", 
		choices: ["Dwight", "Todd Packer", "Kevin", "Pam"], 
		answer: "Todd Packer"
	},
	{
		question: "In S2E21 'Conflict Resolution': Who complained about Pam planning her wedding on company time?", 
		choices: ["Toby", "Jim", "Angela", "Oscar"], 
		answer: "Jim"
	},
	{
		question: "In S3E13 'The Return' What office supply chain has Dwight begun working for?", 
		choices: ["OfficeMax", "Staples", "Office Depot", "Comp USA"] , 
		answer: "Staples"
	},
	];

let questArray = [
	questionsObj[0].question, 
	questionsObj[1].question, 
	questionsObj[2].question,
	questionsObj[3].question,
	questionsObj[4].question,
	questionsObj[5].question,
	questionsObj[6].question,
	questionsObj[7].question,
	questionsObj[8].question,
	questionsObj[9].question,
	];

let answersArray = [
	questionsObj[0].answer,
	questionsObj[1].answer,
	questionsObj[2].answer,
	questionsObj[3].answer,
	questionsObj[4].answer,
	questionsObj[5].answer,
	questionsObj[6].answer,
	questionsObj[7].answer,
	questionsObj[8].answer,	
	questionsObj[9].answer,
	];

function renderQuestions() {

	let questHold = document.getElementById("questionsHold");


	for (let i = 0; i < questArray.length; i++) {


		let questPar = $("<p>");
		$(questPar).append(questArray[i]);
		$(questHold).append(questPar);
		let j = i + 1;

		for(let x = 0; x < questionsObj[i].choices.length; x++) {
			$(questHold).append('<input type="radio" name="question' + j + '"value="' + questionsObj[i].choices[x] + '" class = "choiceBtns" />', questionsObj[i].choices[x]);
			$("input:radio").attr("id", "radButtons");
		}

}
	console.log(questHold);
}

		function checkAnswers() {
			let userInputs = [];

			for(let j = 0; j < arguments.length; j++) {
				userInputs[j] = arguments[j];
			}

			let correct = 0;
			let wrong = 0;

			for(let i = 0; i < userInputs.length; i++) {
				if (userInputs[i]===questionsObj[i].answer) {
					correct++;
				} else {
					wrong++;
				}

			$("#correctPar").text("Correct: " + correct);
			$("#wrongPar").text("Wrong: " + wrong);
			}
		}

function grabUserInputValues() {

		clearInterval(intervalID);

		let radioAnswer1 = $("input[name='question1']:checked").val();
		console.log(radioAnswer1);
		
		let radioAnswer2 = $("input[name='question2']:checked").val();
		console.log(radioAnswer2);

		let radioAnswer3 = $("input[name='question3']:checked").val();
		console.log(radioAnswer3);

		let radioAnswer4 = $("input[name='question4']:checked").val();
		console.log(radioAnswer4);

		let radioAnswer5 = $("input[name='question5']:checked").val();
		console.log(radioAnswer5);

		let radioAnswer6 = $("input[name='question6']:checked").val();
		console.log(radioAnswer6);

		let radioAnswer7 = $("input[name='question7']:checked").val();
		console.log(radioAnswer7);

		let radioAnswer8 = $("input[name='question8']:checked").val();
		console.log(radioAnswer8);

		let radioAnswer9 = $("input[name='question9']:checked").val();
		console.log(radioAnswer9);

		let radioAnswer10 = $("input[name='question10']:checked").val();
		console.log(radioAnswer10);

		checkAnswers(
			radioAnswer1, 
			radioAnswer2, 
			radioAnswer3, 
			radioAnswer4, 
			radioAnswer5, 
			radioAnswer6, 
			radioAnswer7, 
			radioAnswer8, 
			radioAnswer9, 
			radioAnswer10
			);
	
};

	let minutes = 4;
	let seconds = 59;
	let intervalID;

	function settingIntervalId() {

		let intervalID = setInterval(runningTimer, 1000);
	}

	function runningTimer() {
		
		seconds--;

		if (seconds == 0) {
			minutes--;
		};

		if (seconds == 0 && minutes == 0) {
			grabUserInputValues();
		};

		if (seconds > 9) {

			$("#timer").text("Time Remaining " + minutes + ":" + seconds);
		
		} else {

			$("#timer").text("Time Remaining " + minutes + ":0" + seconds);

		}

		if (seconds <= 0) {

			seconds = 59;
		
		}

	}


$(document).ready(function(){

	settingIntervalId();

	renderQuestions();

	$("#submitBtn").on("click", function() {

		grabUserInputValues();

		checkAnswers();

		$("#playAgain").removeClass("hide");

	})

	$("#playAgain").on("click", function() {

		location.reload();

	})

});

