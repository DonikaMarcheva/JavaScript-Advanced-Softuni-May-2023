class Stringer{
    constructor(string, length){
        this.innerString=string;
        this.innerLength=length;
    }
    increase(length){
        this.innerLength+=length;
    }
    decrease(length){
        this.innerLength-=length;
        if(this.innerLength<0){
            this.innerLength=0;
        }
    }
    toString(){
        let string=this.innerString;
        if(this.innerLength===0){
            string='';
            return `${string}...`;
        }
        else if(string.length>this.innerLength){
           string= this.innerString.substring(0,this.innerString.length-this.innerLength);
            return `${string}...`
        }else{
        return this.innerString;
        }   
}
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4); 
console.log(test.toString()); // Tes