{

const playGame = function(playerInput) {
    const getMoveName = function(argMoveId){
      if(argMoveId == 1) return 'kamień';
      else if(argMoveId == 2) return 'papier';
      else if(argMoveId == 3) return 'nożyce';
    }

    const displayResult = function(argComputerMove, argPlayerMove) {

      const cond = (
         (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
         (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
         (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
      );

      if (cond) printMessage ('Wygrywasz!');
      else if (argComputerMove == argPlayerMove) printMessage ('Remis! Spróbuj jeszcze raz!');
      else printMessage ('Przegrywasz!');
      }

    clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  
  const computerMove = getMoveName(randomNumber);
  
  printMessage('Mój ruch to: ' + computerMove);
  
  const playerMove = getMoveName(playerInput);
  
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById('buttons').addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
       playGame(event.target.dataset.choice);
    }
  });

}