function sumTable() {
let rows=document.querySelectorAll('table tr');
let sum=0;
for(let i=1;i<rows.length;i++){
    let cols=rows[i].children;
    let lastCol=cols[cols.length-1].textContent;
    sum+=Number(lastCol);
}
document.getElementById('sum').textContent=sum;
}