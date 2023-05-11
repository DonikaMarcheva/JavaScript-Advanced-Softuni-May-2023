function search() {
   let elArr = Array.from(document.querySelectorAll('ul li'));
   // or let elArr = Array.from(document.querySelectorAll(#ul li));
   let searchedValue = document.getElementById('searchText').value;
   let resultField = document.getElementById('result');
   let counter = 0;
   for (const el of elArr) {
      let textEl = el.textContent;
      if (textEl.includes(searchedValue)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         counter++;
      } else {
         el.style.textDecoration = 'none';
         el.style.fontWeight = 'normal';
      }
   }
   let result = `${counter} matches found`;
   resultField.textContent = result;
}
