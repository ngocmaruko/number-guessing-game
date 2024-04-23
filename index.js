let attemps = 0;
let guessNumber;
function guessingGame () {
  const min = 1;
  const max = 3;
  const answer = Math.floor(Math.random() * (max - min + 1) + min);

  
  guessNumber = Number(document.querySelector('.js-guess-number').value);
  console.log(guessNumber);

  if(isNaN(guessNumber)){
    document.querySelector('.js-result')
    .innerHTML = 'Please submit a valid number';
  } else if (guessNumber > max) {
    document.querySelector('.js-result')
    .innerHTML = 'Your number is higher than the max number';
  } else if (guessNumber < min) {
    document.querySelector('.js-result')
    .innerHTML = 'Your number is lower than the in number';
  } else {
    if(answer === guessNumber){
      document.querySelector('.js-result')
        .innerHTML = 'Congratulation!';
    } else {
      document.querySelector('.js-result')
        .innerHTML = 'Please try again!';
    }
  }

}
