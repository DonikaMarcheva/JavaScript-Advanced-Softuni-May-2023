function extractText() {
    const elements = document.getElementById('items').children;
    const elementArr = Array.from(elements);
    const elementsAsText = elementArr
        .map(li => li.textContent)
        .join('\n');
    const result = document.getElementById('result');
    result.value = elementsAsText;




}