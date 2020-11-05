function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2) {
    return 'papier'
  } else if(argMoveId == 3) {
    return 'nożyce'
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!')
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis! Spróbuj jeszcze raz!')
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
    printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!')
} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!')
} else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis! Spróbuj jeszcze raz!')
} else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
    printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!')
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!')
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis! Spróbuj jeszcze raz!')
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
    printMessage('Czyżby walkower? Wybierz którąś wartość, aby zagrać!')
}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

displayResult(argComputerMove, argPlayerMove);