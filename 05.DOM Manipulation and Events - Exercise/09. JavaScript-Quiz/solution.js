function solve() {
  let quiizField = Array.from(document.getElementsByTagName('section'));
  let counter = 0;
  for (let i = 0; i < quiizField.length; i++) {
    let field = quiizField[i];
    let questionField = field.querySelector('.question-wrap h2');
    let question = questionField.textContent;
    let [firstButton, secondButton] = field.getElementsByTagName('p');
    firstButton.addEventListener('click', checkAnswer);
    secondButton.addEventListener('click', checkAnswer);

    function checkAnswer(e) {
      let textOnButton = e.target.textContent;
      if (question.includes(1)) {
        if (textOnButton === 'onclick') {
          counter++;
        }
      } else if (question.includes(2)) {
        if (textOnButton === 'JSON.stringify()') {
          counter++;
        }
      } else if (question.includes(3)) {
        if (textOnButton === 'A programming API for HTML and XML documents') {
          counter++;
        }
      }
      console.log(counter);
      if (i === 2) {
        let resultSection = document.getElementById('results');
        let result = document.querySelector('#results li h1');
        if (counter === 3) {
          result.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          result.textContent = `You have ${counter} right answers`
        }
        quiizField[i].style.display = 'none';
        resultSection.style.display = 'block';
        return;
      }
      quiizField[i].style.display = 'none';
      quiizField[i + 1].style.display = 'block';

    }
  }

}
