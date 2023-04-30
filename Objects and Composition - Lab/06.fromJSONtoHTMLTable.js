function fromJSONtoHTMLTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    console.log(outputArr.join('\n'));

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        let keyRow = `    <tr>`;
        for (const key of keys) {
            keyRow += `<th>${escapeHtml(key)}</th>`
        }
        keyRow += `</tr>`
        return keyRow;
    }

    function makeValueRow(obj) {
        let valueRow = `    <tr>`;
        for (const key in obj) {
            let value = obj[key];
            valueRow += `<td>${escapeHtml(value)}</td>`
        }
        valueRow += `</tr>`;
        return valueRow;
    }

    function escapeHtml(value) {
        return value.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

}
fromJSONtoHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)