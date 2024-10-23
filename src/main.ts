import './style.css';


function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num1 = getRandomNumber(1, 100);
const num2 = getRandomNumber(1, 100);
const correctAnswer = num1 + num2;

document.getElementById('exercise')!.innerHTML = `${num1} + ${num2} = [ ]`;

document.getElementById('checkAnswer')!.addEventListener('click', function() {
  const userAnswer = parseInt((document.getElementById('answer') as HTMLInputElement).value);
  const resultDiv = document.getElementById('result') as HTMLDivElement;

  if (userAnswer === correctAnswer) {
      document.body.style.backgroundColor = 'green';
      resultDiv.className = 'alert alert-success alert-custom';
      resultDiv.textContent = 'Helyes válasz!';
  } else {
      document.body.style.backgroundColor = 'red';
      resultDiv.className = 'alert alert-danger alert-custom';
      resultDiv.textContent = 'Hibás válasz, próbáld újra!';
  }

  resultDiv.style.display = 'block';
});