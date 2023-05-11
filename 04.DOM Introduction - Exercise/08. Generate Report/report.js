function generateReport() {
    let boxes = document.querySelectorAll('thead tr th input')
    let rows = document.querySelectorAll('tbody tr')
    let output = document.querySelector('#output')

    let result = []

    for (let i = 0; i < rows.length; i++) {
        let report = {}
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].checked) {
                let name = boxes[j].name;
                let cell = rows[i].children[j].textContent;
                report[name] = cell;
            }
        }
        result.push(report)
    }
    output.textContent = JSON.stringify(result)
}