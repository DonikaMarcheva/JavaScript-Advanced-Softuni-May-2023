function daysInAMonth(month,year){
let searchedDate=new Date(year, month,0).getDate();
console.log(searchedDate);
}
daysInAMonth(1, 2012)