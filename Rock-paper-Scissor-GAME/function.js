document.querySelector('.js-rock-button')
.addEventListener('click',() => {
    playergame('rock');
});

document.querySelector('.js-paper-button')
.addEventListener('click',()=>{
    playergame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click',()=>{
    playergame('scissors');
});

let score =JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};
updatescoreelement();

let isautoplay=false;
let intervalId;

function autoplay() {
   if(!isautoplay){
   intervalId= setInterval(() => {
        const playerMove=pickcomputerMove();
        playergame(playerMove);
    }, 1000);
    isautoplay=true;
    }else{
        clearInterval(intervalId);
        isautoplay=false;
    }
}


function playergame(playerMove){
const computerMove= pickcomputerMove();
let result='';
if (playerMove=='Scissors'){
    if (computerMove==='rock'){
        result='lose';
    }
    else if (computerMove==='paper'){
        result='win';
    }
    else if (computerMove==='scissors'){
        result='tie';
    }
}
else if (playerMove==='paper'){
    if (computerMove==='rock'){
        result='win';
    }
    else if (computerMove==='paper'){
        result='tie';
    }
    else if (computerMove==='scissors'){
        result='lose';
    }
}
else if(playerMove=='rock'){
    if (computerMove==='rock'){
        result='tie';
    }
    else if (computerMove==='paper'){
        result='lose';
    }
    else if (computerMove==='scissors'){
        result='win';
    }
}
if (result==='win'){
    score.win+=1
}
else if (result==='lose'){
    score.lose+=1;
}
else if(result==='tie'){
    score.tie+=1;
}
localStorage.setItem('score',JSON.stringify(score));
    updatescoreelement();
    document.querySelector('.js-result').innerHTML=`you ${result}`;
    document.querySelector('.js-move').innerHTML=`you ${playerMove} - computer ${computerMove}`;
}
function updatescoreelement(){
    document.querySelector('.js-score')
    .innerHTML=`Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;

}
function pickcomputerMove(){
const randomNumber = Math.random();
let computerMove='';
if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove='rock';
}
else if (randomNumber >= 1/3 && randomNumber <2/3) {
    computerMove='paper';
}
else if(randomNumber>=2/3 && randomNumber<1) {
    computerMove='scissors';
}
return computerMove;
}