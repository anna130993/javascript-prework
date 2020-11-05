function playGame (playerInput) {
    clearMessages();
    function getMoveName(argMoveId){
      if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2) {
      return 'papier';
    } else if(argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

    function displayResult(argComputerMove, argPlayerMove) {
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
       printMessage('Wygrywasz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
       printMessage('Przegrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
       printMessage('Remis! Spróbuj jeszcze raz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
       printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
       printMessage('Wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
       printMessage('Przegrywasz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
       printMessage('Remis! Spróbuj jeszcze raz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
       printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
       printMessage('Wygrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
       printMessage('Przegrywasz!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
       printMessage('Remis! Spróbuj jeszcze raz!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
       printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  
  let computerMove = getMoveName(randomNumber);
  
  printMessage('Mój ruch to: ' + computerMove);
  
  let playerMove = getMoveName(playerInput);
  
  printMessage('Twój ruch to: ' + playerMove);

  let argComputerMove = getMoveName(randomNumber);

  let argPlayerMove = getMoveName(playerInput);

  displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });