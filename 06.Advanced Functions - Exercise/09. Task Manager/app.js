function solve() {
    let taskField = document.getElementById('task');
    let descriptionField = document.getElementById('description');
    let dateField = document.getElementById('date');
    let addButton = document.getElementById('add');
 
    addButton.addEventListener('click', add);
 
    function add(e) {
        e.preventDefault();
 
        if (taskField.value && descriptionField.value && dateField.value) {
            let divToAdd = document.querySelector('.wrapper section:nth-of-type(2) div:nth-of-type(2)');
 
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = taskField.value;
            let p = document.createElement('p');
            p.textContent = `Description: ${descriptionField.value}`;
            let p1 = document.createElement('p');
            p1.textContent = `Due Date: ${dateField.value}`;
            let div = document.createElement('div');
            div.classList = 'flex';
            let greenButton = document.createElement('button');
            greenButton.textContent = 'Start';
            greenButton.classList = 'green';
            greenButton.addEventListener('click', move)
            let redButton = document.createElement('button');
            redButton.classList = 'red';
            redButton.textContent = 'Delete';
            redButton.addEventListener('click', deleteArticle)
            div.appendChild(greenButton);
            div.appendChild(redButton);
 
            article.appendChild(h3);
            article.appendChild(p);
            article.appendChild(p1);
            article.appendChild(div);
 
            divToAdd.appendChild(article);
            taskField.value = '';
            descriptionField.value = '';
            dateField.value = '';
 
            function move() {
                let nextDivToAdd = document.querySelector('.wrapper section:nth-of-type(3) div:nth-of-type(2)');
                nextDivToAdd.appendChild(article);
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }
                let redButton = document.createElement('button');
                redButton.classList = 'red';
                redButton.textContent = 'Delete';
                redButton.addEventListener('click', deleteArticle);
                let orangeButton = document.createElement('button');
                orangeButton.classList = 'orange';
                orangeButton.textContent = 'Finish';
                orangeButton.addEventListener('click', complete);
                div.appendChild(redButton);
                div.appendChild(orangeButton);
            }
            function deleteArticle(e) {
                let article = e.target.parentElement.parentElement;
                let parent = article.parentElement;
                parent.removeChild(article);
 
            }
            function complete(e) {
                let finishBtnParent=e.target.parentElement.parentElement;
                let lastDivToAddIn = document.querySelector('.wrapper section:nth-of-type(4) div:nth-of-type(2)');
                lastDivToAddIn.appendChild(article);
                article.removeChild(div);
            }
            
        }
    }
}