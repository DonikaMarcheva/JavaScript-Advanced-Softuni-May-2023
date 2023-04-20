function wordsUppercase(string){
    let pattern=/[A-Za-z0-9]+/g;
    let match=string.match(pattern);
    let newString=match.join(', ').toUpperCase();
    console.log(newString);
}
wordsUppercase('hello')