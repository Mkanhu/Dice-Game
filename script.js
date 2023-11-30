function refreshMe() {
  let img1 = document.querySelector(".player1>img");
  let img2 = document.querySelector(".player2>img");
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;
  switch (num1) {
    case 1:
      img1.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      img1.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      img1.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      img1.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      img1.setAttribute("src", "./images/dice5.png");
      break;

    default:
      img1.setAttribute("src", "./images/dice6.png");
  }

  switch (num2) {
    case 1:
      img2.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      img2.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      img2.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      img2.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      img2.setAttribute("src", "./images/dice5.png");
      break;

    default:
      img2.setAttribute("src", "./images/dice6.png");
  }
}
