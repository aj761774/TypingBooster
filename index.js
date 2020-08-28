
let i = 300;
let j = 1;
let word;
const started = document.querySelector("#started");
const start = document.querySelector("#start");
const startSection = document.querySelector("#start-section");
const score = document.querySelector("#score");
const inputField = document.querySelector("#inputField");
const time = document.querySelector('#timeLeft');
const audio = new Audio('sounds/game.mp3');
const words = ["Abhinav Jaiswal","Engineer","King Kong","Rajesh Kodari","Pushker Gautam","Gulshan Kumar","Swapnil Raj","Hariprakash Prajapati","Adarsh","Yogendra Sahu","Rajkumar","Nikhil Pradhan","Rishi sahu"]
start.addEventListener('click',()=>{
  started.style.display = 'block';
  startSection.style.display = 'none';
  score.innerHTML = 0;
  j = 1;
  i = 300;
  time.innerHTML = 300 + ' S';
  generateRandomWord();
  audio.play();
  setTimeout(()=>handleTime(--i),1000);
});

function handleTime(i){
  time.innerHTML = i + ' S';
  if(i==150){
    audio.play();
    setTimeout(()=>handleTime(--i),1000);
  }
  if(i!=0){
    setTimeout(()=>handleTime(--i),1000);
  }
  else{
    document.querySelector("#gameOver").innerHTML = "Game Over";
    inputField.value = '';
    started.style.display = 'none';
    startSection.style.display = 'block';
    document.querySelector("#previousScore").innerHTML = "Your Previous Score: " + (j-1);

  }
}

function generateRandomWord(){
  const randomNo = Math.floor(Math.random()*words.length + 1) - 1;
  const randomWord = words[randomNo];

  document.querySelector("#randomWord").innerHTML = randomWord;
  word = randomWord;
}

document.querySelector("#match").addEventListener("click",()=> {
  if(word == inputField.value){
    inputField.value = '';
    score.innerHTML = j++;
    generateRandomWord();
  }
  else{
    inputField.value = '';
    generateRandomWord();
  }
});
