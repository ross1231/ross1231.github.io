document.getElementById("pumba").onclick = function () {
  var score = 0, // Initialize score to 0
  	questions = [
  		// A list of questions to ask the visitor
  		"You found Jigglypuff 208CP.  What do you do?",
  		"Does Pokemon Go start businesses?",
  		"You found Chansey 399CP.  What do you do?",
  		"You see a gym.  What do you do?",
  		"Which commands do you tell the Pokemon to do?"
  	],
  	responses = questions.map((e, i) => i === 1 ? confirm(e) : prompt(e)), // Ask the visitor each question and save the responses using either prompt() or confirm() depending on the question
  	answer = ["Use your great ball", true, "Give two raspberries then use Ultra ball", "Fight gym", "Swipe, tap, and hold"]; // List of Correct Answers
  responses.forEach((response, i) => {
  	// For each user response, check it against the correct answer and add 1 to score if it is correct
    if (response === answer[i]) score++;
  });
  // Tell the final score to the user
  alert(`Congratulations!  You scored a ${score} out of ${questions.length}`);
}