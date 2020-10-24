function enterTeacherInputs() {
	var webpage = document.getElementsById("link").value;
	var interval = document.getElementById("timing").value;
}

function enterQuestions() {
	var question = document.getElementById("question").value;
  	
  	/*question.setAttribute("type", "text");
  	question.setAttribute("value", "Hello World!");
  	document.body.appendChild(question);*/
}

function printInputValue() {
	var input = document.getElementById("link").value;
	document.write(input)
}



document.addEventListener('DOMContentLoaded', function() {
	var newQButton = document.getElementsById('newButton');
	newButton.addEventListener('click', appendButton() {
		var newInputBox = document.createElement('moreQuestionFields');
		newInputBox.type = "text";
		document.getElementById("moreQuestionFields").appendChild(newInputBox);
	});
});