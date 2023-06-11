window.addEventListener("load", solve);

function solve() {
let make=document.getElementById('make');
let model=document.getElementById('model');
let year=document.getElementById('year');
let fuel=document.getElementById('fuel');
let originalCost=document.getElementById('original-cost');
let sellingPrice=document.getElementById('selling-price');
let publishButton=document.getElementById('publish');
publishButton.addEventListener('click',publish);
let tableInfo=document.getElementById('table-body');
let carList=document.getElementById('cars-list');
let profitElement=document.getElementById('profit');
let totalProfit=0;

function publish(e){
  e.preventDefault();
  if(make.value !='' && model.value !='' && year.value !='' 
  && fuel.value !='' && originalCost.value !='' && sellingPrice.value !='' 
  && Number(originalCost.value)<=Number(sellingPrice.value)){
    let tr=document.createElement('tr');
    tr.classList.add('row');
    let td1=document.createElement('td');
    td1.textContent=make.value;
    let td2=document.createElement('td');
    td2.textContent=model.value;
    let td3=document.createElement('td');
    td3.textContent=year.value;
    let td4=document.createElement('td');
    td4.textContent=fuel.value;
    let td5=document.createElement('td');
    td5.textContent=originalCost.value;
    let td6=document.createElement('td');
    td6.textContent=sellingPrice.value;
    let td7=document.createElement('td');
    let editButton=document.createElement('button');
    editButton.className='action-btn edit';
    editButton.textContent='Edit';
    editButton.addEventListener('click',edit);
    let sellButton=document.createElement('button');
    sellButton.className='action-btn sell';
    sellButton.textContent='Sell';
    sellButton.addEventListener('click',sell);

    td7.appendChild(editButton);
    td7.appendChild(sellButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tableInfo.appendChild(tr);
    make.value='';
    model.value='';
    year.value='';
    fuel.value='';
    originalCost.value='';
    sellingPrice.value='';
  }
}
 function edit(e){
      let trElement=e.target.parentElement.parentElement;
      let trElementArr=Array.from(trElement.children);
      
      make.value=trElementArr[0].textContent;
      model.value=trElementArr[1].textContent;
      year.value=trElementArr[2].textContent;
      fuel.value=trElementArr[3].textContent;
      originalCost.value=trElementArr[4].textContent;
      sellingPrice.value=trElementArr[5].textContent;
      trElement.remove();
    }
    function sell(e){
      let trElement=e.target.parentElement.parentElement;
      let trElementArr=Array.from(trElement.children);
      let liElement=document.createElement('li');
      liElement.className='each-list';
      let span1=document.createElement('span');
      span1.textContent=`${trElementArr[0].textContent} ${model.value=trElementArr[1].textContent}`;
      let span2=document.createElement('span');
      span2.textContent=`${trElementArr[2].textContent}`;
      let span3=document.createElement('span');
      let profit=Number(trElementArr[5].textContent)-Number(trElementArr[4].textContent);
      totalProfit+=profit;
      span3.textContent=profit;
      liElement.appendChild(span1);
      liElement.appendChild(span2);
      liElement.appendChild(span3);
      carList.appendChild(liElement);
      profitElement.textContent=`${totalProfit.toFixed(2)}`;
      trElement.remove();
    }
}
