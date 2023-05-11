function solve() {
  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let textArr = input
    .toLowerCase()
    .split(' ');
  let result = '';
  switch (convention) {
    case ('Pascal Case'):
      textArr.forEach((el, i) => {
        result += el[0].toUpperCase() + el.substring(1);
      });
      break;
    case ('Camel Case'):
      textArr.forEach((el, i) => {
        if (i === 0) {
          result += el;
        } else {
          result += el[0].toUpperCase() + el.substring(1);
        }
      });
      break;
    default: result = 'Error!'; break;
  }
  document.getElementById('result').textContent = result;

}