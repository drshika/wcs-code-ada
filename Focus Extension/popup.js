window.resizeTo(1920, 768);

function enterTeacherInputs() {
	var webpage = document.getElementsById("link").value;
	var interval = document.getElementById("timing").value;
}

function enterQuestions() {
	var question = document.getElementById("question").value;
}


function printInputValue() {
	var input = document.getElementById("link").value;
	document.write(input);
}


addQuestionFields() {
	var newInputBox = document.createElement("input");
	newInputBox.setAttribute("type", "text");
	document.body.appendChild(newInputBox);
}

var nb = document.getElementsById('newButton');
if (nb) {
	nb.addEventListener('click', addQuestionFields);
}