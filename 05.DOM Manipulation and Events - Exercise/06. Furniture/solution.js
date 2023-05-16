function solve() {
  let textAreas = document.querySelectorAll('#exercise textarea');
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];

  let buttons = document.querySelectorAll('#exercise button');
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener('click', generateItems);
  buyButton.addEventListener('click', calculation);

  function generateItems() {
    let items = JSON.parse(inputArea.value);
    let tableBody = document.querySelector('.table tbody')
    for (const item of items) {
      let trElement = document.createElement('tr');

      let tdImgElement = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = item.img;
      tdImgElement.appendChild(imgElement);

      let tdNameElement = document.createElement('td');
      let pNameElement = document.createElement('p');
      pNameElement.textContent = item.name;
      tdNameElement.appendChild(pNameElement);

      let tdPriceElement = document.createElement('td');
      let pPriceElement = document.createElement('p');
      pPriceElement.textContent = item.price;
      tdPriceElement.appendChild(pPriceElement);

      let tddecFactorElement = document.createElement('td');
      let pdecFactorElement = document.createElement('p');
      pdecFactorElement.textContent = item.decFactor;
      tddecFactorElement.appendChild(pdecFactorElement);

      let tdcheckboxElement = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tdcheckboxElement.appendChild(checkbox);

      trElement.appendChild(tdImgElement);
      trElement.appendChild(tdNameElement);
      trElement.appendChild(tdPriceElement);
      trElement.appendChild(tddecFactorElement);
      trElement.appendChild(tdcheckboxElement);

      tableBody.appendChild(trElement);
    }
  }

  function calculation() {
    let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    let selectedRows = tableRows.filter(row => row.querySelector('input:checked'));
    let names = selectedRows
      .map(row => row.querySelector('td:nth-of-type(2) p'))
      .map(p => p.textContent)
      .join(', ');

    let prices = selectedRows
      .map(row => row.querySelector('td:nth-of-type(3) p'))
      .map(p => Number(p.textContent));

    let decFactor = selectedRows
      .map(row => row.querySelector('td:nth-of-type(4) p'))
      .map(p => Number(p.textContent));

    let totalPrice = prices.reduce((a, c) => a + c, 0).toFixed(2);
    let averageDecFactor = decFactor.reduce((a, c) => a + c, 0) / decFactor.length;

    let furnitureText = `Bought furniture: ${names}`;
    let totalPriceText = `Total price: ${totalPrice}`;
    let decFactorText = `Average decoration factor: ${averageDecFactor}`;

    outputArea.textContent = `${furnitureText}\n${totalPriceText}\n${decFactorText}`
  }
}