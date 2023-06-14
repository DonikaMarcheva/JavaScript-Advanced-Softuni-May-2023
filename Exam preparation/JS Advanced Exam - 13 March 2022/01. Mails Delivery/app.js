function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addButton = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', reset);
    let listMails = document.getElementById('list');
    let sentMails = document.querySelector('.sent-list');
    let deleteMails = document.querySelector('.delete-list');

    addButton.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        if (recipientName.value && title.value && message.value) {
            let liElement = addElements('li');
            let h4Element1 = addElements('h4', `Title: ${title.value}`);
            let h4Element2 = addElements('h4', `Recipient Name: ${recipientName.value}`);
            let spanElement = addElements('span', `${message.value}`);
            let divElement = addElements('div');
            divElement.setAttribute('id', 'list-action');
            let sendButton = addElements('button', 'Send');
            sendButton.setAttribute('id', 'send');
            sendButton.setAttribute('type', 'submit');
            sendButton.addEventListener('click', send);
            let deleteButton = addElements('button', 'Delete');
            deleteButton.setAttribute('id', 'delete');
            deleteButton.setAttribute('type', 'submit');
            deleteButton.addEventListener('click', deleteAll);

            divElement.appendChild(sendButton);
            divElement.appendChild(deleteButton);
            liElement.appendChild(h4Element1);
            liElement.appendChild(h4Element2);
            liElement.appendChild(spanElement);
            liElement.appendChild(divElement);
            listMails.appendChild(liElement);

            recipientName.value = '';
            title.value = '';
            message.value = '';
        }
    }
    function reset() {
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }
    function send(e) {
        let parent = e.target.parentElement.parentElement;
        let liEl = addElements('li');
        let recipientText = parent.querySelector('h4:nth-of-type(2)').textContent.split('Recipient Name: ')[1];
        let span1 = addElements('span', `To: ${recipientText}`);
        let titleText = parent.querySelector('h4:nth-of-type(1)').textContent.split('Title: ')[1];
        let span2 = addElements('span', `Title: ${titleText}`);
        let div = addElements('div');
        div.setAttribute('class', 'btn');
        let deleteBtn = addElements('button', 'Delete');
        deleteBtn.setAttribute('class', 'delete');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.addEventListener('click', deleteAll);
        div.appendChild(deleteBtn);
        liEl.appendChild(span1);
        liEl.appendChild(span2);
        liEl.appendChild(div);
        sentMails.appendChild(liEl);
        parent.remove();
    }
    function deleteAll(e) {
        let parent = e.target.parentElement.parentElement;
        let divEl = parent.querySelector('div');
        divEl.remove();
        deleteMails.appendChild(parent);

    }

    function addElements(tagName, content) {
        let element = document.createElement(`${tagName}`);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}

solve()