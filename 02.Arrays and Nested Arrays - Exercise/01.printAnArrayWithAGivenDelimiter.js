function printAnArray(array, string) {
    console.log(array.join(`${string}`));
}
printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')