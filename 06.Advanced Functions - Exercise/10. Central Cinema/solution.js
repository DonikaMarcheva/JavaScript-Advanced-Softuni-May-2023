function solve() {
    let nameField= document.querySelector('#container input:nth-of-type(1)');
    let hallField= document.querySelector('#container input:nth-of-type(2)');
    let ticketPriceField= document.querySelector('#container input:nth-of-type(3)');
    let onScreenButton=document.querySelector('#container button');
    onScreenButton.addEventListener('click',add);
    let clearButton=document.querySelector('#archive > button');
    clearButton.addEventListener('click',clear);
    
    function add(e){
    e.preventDefault();
        let nameFieldValue=nameField.value;
        let hallFieldValue=hallField.value;
        let ticketPriceFieldValue=Number(ticketPriceField.value);
        if(nameFieldValue && hallFieldValue && ticketPriceFieldValue && typeof(ticketPriceFieldValue)==="number"){
            let sectionToAdd=document.getElementById('movies');
            let ulElement=document.createElement('ul');
            let liElement=document.createElement('li');
            let spanElement=document.createElement('span');
            spanElement.textContent=nameFieldValue;
            let strongElement=document.createElement('strong');
            strongElement.textContent=`Hall: ${hallFieldValue}`;
            let divElement=document.createElement('div');
            let strongInDiv=document.createElement('strong');
            strongInDiv.textContent=ticketPriceFieldValue.toFixed(2);
            let inputInDiv=document.createElement('input');
            inputInDiv.setAttribute('placeholder','Tickets Sold');
            let archiveButton=document.createElement('button');
            archiveButton.addEventListener('click',archive);
            archiveButton.textContent='Archive';
    
            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
    
            divElement.appendChild(strongInDiv);
            divElement.appendChild(inputInDiv);
            divElement.appendChild(archiveButton);
    
            liElement.appendChild(divElement);
            ulElement.appendChild(liElement);
    
            sectionToAdd.appendChild(ulElement);
    
            nameField.value='';
            hallField.value='';
            ticketPriceField.value='';
        }
    }
            function archive(e){
                let archiveField=document.querySelector('#archive ul');

                let archLiElement=e.target.parentElement.parentElement;
                let deleteButton=document.createElement('button');
                deleteButton.textContent='Delete';
                deleteButton.addEventListener('click',deleteEl);
                archLiElement.appendChild(deleteButton);
                let liDiv=archLiElement.querySelector('div');
                let inputInDiv=liDiv.querySelector('input');
                let inputValue=Number(inputInDiv.value);
                    if(inputValue && typeof(inputValue)==='number'){
                        let archStrongInDiv=liDiv.querySelector('strong');
                        let totalAmount=(Number(archStrongInDiv.textContent)*inputValue).toFixed(2);
                        let strongEl=archLiElement.querySelector('strong');
                        strongEl.textContent=`Total amount: ${totalAmount}`;
    
                    }
                liDiv.remove();
                archiveField.appendChild(archLiElement);
                }
                function deleteEl(e){
                    let parentElement=e.target.parentElement;
                    parentElement.remove();
                }
    
    function clear(){
        let ul=document.querySelector('#archive ul')
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}
    }
    