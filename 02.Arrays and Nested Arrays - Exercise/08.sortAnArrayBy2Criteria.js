function sortAnArrayBy2Criteria(input){
let sorted=input.sort((a,b)=>a.localeCompare(b)).sort((a,b)=>a.length-b.length);
for (const name of sorted) {
    console.log(name);
}
}
sortAnArrayBy2Criteria(['Isacc','Theodor','Jack','Harrison','George'])