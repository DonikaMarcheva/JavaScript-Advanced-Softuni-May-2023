function solve() {
  let initialText = document.getElementById('input').value;
  let inputArr = initialText.split('.').filter(x => x !== '');
  let counter = 0;
  let outputField = document.getElementById('output');
  while (inputArr.length > 0) {
    let paragraph = inputArr.splice(0, 3).join(' .') + '.';
    let paragraphEl = document.createElement('p');
    paragraphEl.textContent = paragraph;
    outputField.appendChild(paragraphEl);
  }
}
