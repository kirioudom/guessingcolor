var square = 6;
var colorRandom = randomColor(square);
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var pick = pickColor();
var resultDisplay = document.querySelector("#displayResult");
var newGameButton = document.querySelector("#newGame");
var headerColor = document.querySelector(".header");
  var easy = document.querySelector("#easy");
  var hard = document.querySelector("#hard");
colorDisplay.textContent = pick;

starGame();


function buttonNewGame(){
  newGameButton.addEventListener("click",resetButton); 
}
function firstStart(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colorRandom[i];
  }
}
function starGame(){
  resetButton();
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
    var pick1 = this.style.background;
    if(pick1 === pick){
      resultDisplay.textContent = "Correct";
      for(var j = 0; j < squares.length; j++){
        squares[j].style.background = pick1;
      }
      headerColor.style.background = pick1;
    }
    else{
      this.style.background = "black";
      resultDisplay.textContent = "Try agian!";
    }
    });
  }
  buttonNewGame();
  easyButton();
  hardButton();
}

function randomColor(num){
  var color;
  var totalColor = [];
  
  for(var i = 0; i < num; i++){
      var r = Math.floor(Math.random() * 256 );
      var g = Math.floor(Math.random() * 256 );
      var b = Math.floor(Math.random() * 256 );
      color = "rgb(" + r + ", " + g + ", " + b + ")";
      totalColor.push(color);
  }
  return totalColor;
}

function pickColor(){
  var pick = Math.floor(Math.random() * colorRandom.length);
  return colorRandom[pick];
}

function addColorSquare(apply){
  for(var i = 0; i < apply.length; i++){
    squares[i].style.background = colorRandom[i];
  }
}

function resetButton(){
  colorRandom = randomColor(square);
  pick = pickColor();
  colorDisplay.textContent = pick;
  resultDisplay.textContent = "";
  headerColor.style.background = "#427b9b";

  addColorSquare(colorRandom);

}

function easyButton(){
 
  easy.addEventListener("click", function(){
    square = 3;
    colorRandom = randomColor(square);
    pick = pickColor();
    easy.classList.add("selected");
    hard.classList.remove("selected");
    headerColor.style.background = "#427b9b";
    resultDisplay.textContent = ""; 
    for(var i = 0; i < squares.length; i++){
        if(colorRandom[i]){
          squares[i].style.background = colorRandom[i];
    }
        else{
          squares[i].style.display = "none";
      }
    }
  });
}

function hardButton(){
  hard.addEventListener("click", function(){
    square = 6;
    colorRandom = randomColor(square);
    pick = pickColor();
    easy.classList.remove("selected");
    hard.classList.add("selected");
    headerColor.style.background = "#427b9b";
    for(var i = 0; i < squares.length; i++){
      squares[i].style.display = "block";
    }
    resetButton();
  });
}