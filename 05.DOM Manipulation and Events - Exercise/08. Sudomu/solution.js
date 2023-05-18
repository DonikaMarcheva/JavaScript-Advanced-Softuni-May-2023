function solve() {
    let [checkButton, clearButton] = document.querySelectorAll('#exercise button');
    let table = document.querySelector('#exercise table');
    let checkParagraph = document.querySelector('#check p');
    checkButton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);

    function check() {
        let board = Array.from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input')).map(x => Number(x.value)));

        let isValid = isvalidSudomo(board);

        if (isValid) {
            table.style.border = '2px solid green';
            checkParagraph.textContent = "You solve it! Congratulations!";
            checkParagraph.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            checkParagraph.textContent = "NOP! You are not done yet...";
            checkParagraph.style.color = 'red';
        }
    }

    function clear() {
        table.style.border = '';
        checkParagraph.textContent = '';
        checkParagraph.style.color = '';
        let input = Array.from(document.querySelectorAll('#exercise tbody tr td input'));
        input.map(x => x.value = '');

    }

    function isvalidSudomo(board) {
        for (let row = 0; row < board.length; row++) {
            let rowValues = new Set();
            let colValues = new Set();
            for (let col = 0; col < board[row].length; col++) {
                let currRowCell = board[row][col];
                let currColCell = board[col][row];
                rowValues.add(currRowCell);
                colValues.add(currColCell);
            }
            if (rowValues.size != 3 || colValues.size != 3) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    }
}