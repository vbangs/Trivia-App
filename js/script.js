const $triviaQ = $(`#question`);
const $correctAns = $(`#correct_answer`);
const $incorrectAns0 = $(`#incorrect_answers0`);
const $incorrectAns1 = $(`#incorrect_answers1`);
const $incorrectAns2 = $(`#incorrect_answers2`);


let triviaData;
$("form").on("button", reloadData);
function reloadData(event) {
  $.ajax({
    url: `https://opentdb.com/api.php?amount=10&category=9&type=multiple`,
  }).then(
    (data) => {
      triviaData = data;
      render();
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}


window.onload = reloadData


const correctAnsBtn = document.querySelector("#correct_answer")
const incorrectAnsBtn0 = document.querySelector("#incorrect_answers0")
const incorrectAnsBtn1 = document.querySelector("#incorrect_answers1")
const incorrectAnsBtn2 = document.querySelector("#incorrect_answers2")


correctAnsBtn.addEventListener("click", () => {
  document.getElementById("correct_answer").style.backgroundColor = "#009944";
  setTimeout(reloadData, 750)
  setTimeout(clearColor, 750)
})

incorrectAnsBtn0.addEventListener("click", () => {
  document.getElementById("incorrect_answers0").style.backgroundColor = "#dc303d";
})

incorrectAnsBtn1.addEventListener("click", () => {
  document.getElementById("incorrect_answers1").style.backgroundColor = "#dc303d";
})

incorrectAnsBtn2.addEventListener("click", () => {
  document.getElementById("incorrect_answers2").style.backgroundColor = "#dc303d";
})



function clearColor() {
  document.getElementById("correct_answer").style.backgroundColor = "white";
  document.getElementById("incorrect_answers0").style.backgroundColor = "white";
  document.getElementById("incorrect_answers1").style.backgroundColor = "white";
  document.getElementById("incorrect_answers2").style.backgroundColor = "white";
}

function render() {
    $triviaQ.html(triviaData.results[0].question);
    $correctAns.html(triviaData.results[0].correct_answer);
    $incorrectAns0.html(triviaData.results[0].incorrect_answers[0]);
    $incorrectAns1.html(triviaData.results[0].incorrect_answers[1]);
    $incorrectAns2.html(triviaData.results[0].incorrect_answers[2]);
}   

