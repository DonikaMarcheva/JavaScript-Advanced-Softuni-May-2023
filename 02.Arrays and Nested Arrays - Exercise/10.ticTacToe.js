function ticTacToe(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let isFirstPlayer = true;
    for (const coordinate of input) {
        let [row, col] = coordinate.split(' ');

        if (dashboard[row][col]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        let marker = isFirstPlayer ? "X" : "O";
        dashboard[row][col] = marker;

        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker && dashboard[i][1] === marker && dashboard[i][2] === marker) {
                console.log(`Player ${marker} wins!`);
                printDashboard();
                return;
            } else if (dashboard[0][i] === marker && dashboard[1][i] === marker && dashboard[2][i] === marker) {
                console.log(`Player ${marker} wins!`);
                printDashboard();
                return;
            } else if (dashboard[0][0] === marker && dashboard[1][1] === marker && dashboard[2][2] === marker) {
                console.log(`Player ${marker} wins!`);
                printDashboard();
                return;
            } else if (dashboard[0][2] === marker && dashboard[1][1] === marker && dashboard[2][0] === marker) {
                console.log(`Player ${marker} wins!`);
                printDashboard();
                return;
            }
        }

        if (!dashboard[0].includes(false) && !dashboard[1].includes(false) && !dashboard[2].includes(false)) {
            console.log("The game ended! Nobody wins :(");
            printDashboard();
            return;
        }
        isFirstPlayer = !isFirstPlayer;
        //====>Todor Stoyanov solution<=====

        // let isFreeSpace=false;
        // for(let i=0;i<dashboard.length;i++){
        //     for(let j=0;j<dashboard[i].length;j++){
        //         if(!dashboard[i][j]){
        //             isFreeSpace=true;
        //             break;
        //         }
        //     }
        //     if(isFreeSpace){
        //         break;
        //     }
        // }
        // if(!isFreeSpace){
        //     console.log("The game ended! Nobody wins :(");
        //     return;
        // }
        //isFirstPlayer=!isFirstPlayer;
    }
    function printDashboard() {
        dashboard.forEach(row => console.log(row.join(`\t`)));
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0",])
console.log('================');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
)
console.log("==============");
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)