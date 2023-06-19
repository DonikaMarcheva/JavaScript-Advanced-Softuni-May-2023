window.addEventListener('load', solve);

function solve() {
        let carModel=document.getElementById('car-model');
        let carYear=document.getElementById('car-year');
        let partName=document.getElementById('part-name');
        let partNumber=document.getElementById('part-number');
        let condition=document.getElementById('condition');
        let nextButton=document.getElementById('next-btn');
        nextButton.addEventListener('click',next);
        let partInfo=document.querySelector('.info-list');
        let confirmOrder=document.querySelector('.confirm-list');
        let imageElement=document.getElementById('complete-img');
        let paragraphElement=document.getElementById('complete-text');
      

function next(e){
        e.preventDefault();
        let carModelValue=carModel.value;
        let carYearValue=carYear.value;
        let partNameValue=partName.value;
        let partNumberValue=partNumber.value;
        let conditionValue=condition.value;
        if(carModelValue==='' || carYearValue==='' || partNameValue==='' || partNumberValue==='' || conditionValue===''
        || Number(carYearValue)<1980 || Number(carYearValue)>2023){
                return;
        }else{
                let li=createElements('li');
                li.classList.add('part-content');
                let article=createElements('article');
                let p1=createElements('p',`Car Model: ${carModelValue}`);
                let p2=createElements('p',`Car year: ${carYearValue}`);
                let p3=createElements('p',`Part Name: ${partNameValue}`);
                let p4=createElements('p',`Part Number: ${partNumberValue}`);
                let p5= createElements('p',`Condition: ${conditionValue}`);
                let editButton=createElements('button','Edit');
                editButton.classList.add('edit-btn');
                editButton.addEventListener('click',edit);
                let continueButton=createElements('button','Continue');
                continueButton.classList.add('continue-btn');
                continueButton.addEventListener('click',continueAll)

                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                article.appendChild(p4);
                article.appendChild(p5);
                li.appendChild(article);
                li.appendChild(editButton);
                li.appendChild(continueButton);
                partInfo.appendChild(li);

                imageElement.style.visibility = "hidden"
                paragraphElement.textContent='';  
        
                carModel.value='';
                carYear.value='';
                partName.value='';
                partNumber.value='';
                condition.value='';
                nextButton.disabled=true;

                function edit(){
                        carModel.value=carModelValue;
                        carYear.value=carYearValue;
                        partName.value=partNameValue;
                        partNumber.value=partNumberValue;
                        condition.value=conditionValue;
                        nextButton.disabled=false;
                        li.remove();
                }
                function continueAll(){
                        let newLi=createElements('li');
                        newLi.classList.add('part-content');
                        newLi.appendChild(article);
                        let confirmButton=createElements('button','Confirm');
                        confirmButton.classList.add('confirm-btn');
                        confirmButton.addEventListener('click',confirmAll);
                        let cancelButton=createElements('button','Cancel');
                        cancelButton.classList.add('cancel-btn');
                        cancelButton.addEventListener('click',cancel)
                        newLi.appendChild(confirmButton);
                        newLi.appendChild(cancelButton);
                        confirmOrder.appendChild(newLi);
                        li.remove();
                        function confirmAll(){
                                newLi.remove();
                                imageElement.style.visibility = "visible"
                                paragraphElement.textContent='Part is Ordered!';
                                nextButton.disabled=false;
                        }
                        function cancel(){
                                newLi.remove();
                                nextButton.disabled=false;
                        }
                }
        }
}
function createElements(tagname,content){
        let el=document.createElement(`${tagname}`);
        if(content){
                el.textContent=content;
        }
        return el;
}
};




