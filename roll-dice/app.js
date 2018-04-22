///*
//GAME RULES:
//
//- The game has 2 players, playing in rounds
//- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
//- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
//- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
//- The first player to reach 100 points on GLOBAL score wins the game
//
//*/
//var scores, activePlayer, rollBtn, diceDOM, holdBtn, newBtn, roundScore, gamePlaying;
//
//rollBtn = document.querySelector('.btn-roll');
//holdBtn = document.querySelector('.btn-hold');
//newBtn = document.querySelector('.btn-new');
//diceDOM = document.querySelector('.dice');
//init();
//
//function init(){
//    gamePlaying = true;
//    scores = [0, 0];
//    roundScore = 0;
//    activePlayer = 0;
//    document.querySelector('.dice').style.display='none';
//    document.querySelector('#current-0').textContent = roundScore;
//    document.querySelector('#current-1').textContent = roundScore;
//    document.querySelector('.player-0-panel').classList.add('active');
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('#name-0').textContent = 'Player 1';
//    document.querySelector('#name-1').textContent = 'Player 2';
//    document.querySelector('#score-0').textContent = scores[0];
//    document.querySelector('#score-1').textContent = scores[1];
//    document.querySelector('.player-0-panel').classList.remove('active');
//    document.querySelector('.player-1-panel').classList.remove('active');
//    document.querySelector('.player-0-panel').classList.remove('winner');
//    document.querySelector('.player-1-panel').classList.remove('winner');
//    document.querySelector('.player-0-panel').classList.add('active');
//    rollBtn.style.display = 'block';
//    holdBtn.style.display= 'block';
//} ;
//
//
//function checkWinner(){
//    if(scores[activePlayer] >= 10) {
//        gamePlaying = false;
//        diceDOM.style.display='none';
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.remove('active');
//        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
//        rollBtn.style.display = 'none';
//        holdBtn.style.display= 'none';
//        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
//    } 
//    return false;
//} 
//
//function nextPlayer(){
//    if(!checkWinner() && gamePlaying){
//        roundScore = 0;
//        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        document.querySelector('#current-0').textContent = roundScore;
//        document.querySelector('#current-1').textContent = roundScore;
//        document.querySelector('.player-0-panel').classList.toggle('active');
//        document.querySelector('.player-1-panel').classList.toggle('active');
//        diceDOM.style.display='none';
//        
//    }
//}
//
//rollBtn.addEventListener('click', function(){
//    if(gamePlaying){
//        var dice = Math.floor(Math.random() * 6) + 1;
//    
//        document.querySelector('#current-' + activePlayer).textContent = dice;
//
//        diceDOM.style.display='block';
//        diceDOM.src = 'dice-' + dice + '.png';
//
//        if(dice !== 1){
//            roundScore += dice;
//            document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        } else{
//            nextPlayer();
//        }
//    }
//    
//    
//})
//
//holdBtn.addEventListener('click', function(){
//    if(!checkWinner() && gamePlaying){
//        scores[activePlayer] += roundScore;
//        document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
//        nextPlayer();
//    }
//})
//
//newBtn.addEventListener('click', init)
var scores, activePlayer, rollBtn, diceDOM, diceDOM2, holdBtn, newBtn, roundScore, gamePlaying, tempScore, inputValue, winScore;

rollBtn = document.querySelector('.btn-roll');
holdBtn = document.querySelector('.btn-hold');
newBtn = document.querySelector('.btn-new');
setScore = document.querySelector('.btn-set-score');
inputValue = document.querySelector('.win-score');
diceDOM = document.querySelector('.dice');
diceDOM2 = document.querySelector('.dice-2');
init();

function init(score){
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    tempScore = 0;
    score ? winScore = score : winScore = 100;
    console.log(winScore);
    diceDOM.style.display='none';
    diceDOM2.style.display='none';
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#score-0').textContent = scores[0];
    document.querySelector('#score-1').textContent = scores[1];
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    rollBtn.style.display = 'block';
    holdBtn.style.display= 'block';
} ;


function checkWinner(){
    if(scores[activePlayer] >= winScore) {
        gamePlaying = false;
        diceDOM.style.display='none';
        diceDOM2.style.display='none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        rollBtn.style.display = 'none';
        holdBtn.style.display= 'none';
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
    } 
    return false;
} 

function nextPlayer(){
    if(!checkWinner() && gamePlaying){
        roundScore = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        tempScore = 0;
        document.querySelector('#current-0').textContent = roundScore;
        document.querySelector('#current-1').textContent = roundScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDOM.style.display='none';
        diceDOM2.style.display='none';
        
    }
}
setScore.addEventListener('click', function(){
    if(inputValue.value > 0 && inputValue.value !== 'undefined'){
        init(inputValue.value);
        console.log(inputValue.value);
    }
})
rollBtn.addEventListener('click', function(){
    if(gamePlaying){
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice, dice2);
        document.querySelector('#current-' + activePlayer).textContent = dice;
        diceDOM.style.display='block';
        diceDOM2.style.display='block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        if(dice === 6 && tempScore === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
            tempScore = 0;
            dice = 0;
            nextPlayer();
        } else if(dice !== 1 && dice2 !== 1){
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
            nextPlayer();
        }
        tempScore = dice;
    }
    
    
})

holdBtn.addEventListener('click', function(){
    if(!checkWinner() && gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
        nextPlayer();
    }
})

newBtn.addEventListener('click', init)
