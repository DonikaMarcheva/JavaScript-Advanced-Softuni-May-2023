function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allCells = document.querySelectorAll('tbody tr td');
      let allCellsArr = Array.from(allCells);
      let searchedText = document.getElementById('searchField').value;

      let clearedSearch = allCellsArr
         .map(x => x.parentElement)
         .map(x => x.classList.remove('select'));

      let foundCells = allCellsArr
         .filter(x => x.textContent
            .includes(searchedText));

      foundCells.map(x => x.parentElement)
         .map(x => x.classList
            .add('select'));
      searchedText = '';
   }
}