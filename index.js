let Player1 = document.getElementById("Player1");
let Player2 = document.getElementById("Player2");
let formBtn = document.getElementById("formBtn");

let resultPlayer1 = document.createElement("p");
let resultPlayer2 = document.createElement("p");
let RandomNumber = document.createElement("p");
let checkWinner = document.createElement("p");

document.body.appendChild(resultPlayer1);
document.body.appendChild(resultPlayer2);
document.body.appendChild(RandomNumber);
document.body.append(checkWinner);

console.log(Player1);
console.log(Player2);

let playRandomNumberGame = function (e) {
  e.preventDefault();
  checkWinner.innerText = "";
  let n1 = parseInt(Player1.value);
  let n2 = parseInt(Player2.value);
  let random = Math.floor(Math.random() * 100);
  resultPlayer1.innerText = "Giocatore 1: " + n1;
  resultPlayer2.innerText = "Giocatore 2: " + n2;
  RandomNumber.innerText = "Numero estratto: " + random;
  if (n1 === random) {
    checkWinner.innerText = "Giocatore 1 ha indovinato";
  }
  if (n2 === random) {
    checkWinner.innerText = "Giocatore 2 ha indovinato";
  }
  if (n1 !== random && n2 !== random) {
    if (random - n1 >= random - n2) {
      checkWinner.innerText =
        "Nessuno ha vinto ma il Player2 è andato più vicino";
    } else {
      checkWinner.innerText =
        "Nessuno ha vinto ma il Player1 è andato più vicino";
    }
  }
};
formBtn.addEventListener("click", playRandomNumberGame);
