function create(words) {
   for (const string of words) {
      let parentDiv = document.getElementById('content');
      let newPara = document.createElement('p');
      newPara.style.display = 'none';
      newPara.textContent = string;
      let newDivElement = document.createElement('div');
      newDivElement.appendChild(newPara);
      parentDiv.appendChild(newDivElement);
      newDivElement.addEventListener('click', () => {
         newPara.style.display = '';
      })
   }
}