class footballTeam {
    constructor(clubName,country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        footballPlayers.forEach(player => {
            let [playerName, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            let searchedPlayer = this.invitedPlayers.filter(x => x.playerName === playerName)[0];
            if (!searchedPlayer) {
                this.invitedPlayers.push({ playerName, age, playerValue });
            } else {
                if (searchedPlayer.playerValue < playerValue) {
                    searchedPlayer.playerValue = playerValue;
                }
            }
        });
        let res = this.invitedPlayers.map(x => x.playerName);
        return `You successfully invite ${res.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [playerName,playerOffer]=selectedPlayer.split('/');
        let searchedPlayer = this.invitedPlayers.filter(x => x.playerName === playerName)[0];
        if(!searchedPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        }else if(searchedPlayer.playerValue>playerOffer){
                let difference=searchedPlayer.playerValue-playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${difference} million more are needed to sign the contract!`);           
        }else{
            searchedPlayer.playerValue='Bought'
            return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`
        }
    }
    ageLimit(name, age){
        let searchedPlayer = this.invitedPlayers.filter(x => x.playerName === name)[0];
        if(!searchedPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        };
        if(searchedPlayer.age>age){
                return `${name} is above age limit!`
            }else{
            let ageDifference=age-searchedPlayer.age;
            if(ageDifference>=5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }else{
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
        }
    }
    transferWindowResult(){
        let res=`Players list:\n`;
        let sortedPlayers=this.invitedPlayers.sort((a,b)=>a.playerName.localeCompare(b.playerName));
        res+=`${sortedPlayers.map(x=>`Player- ${x.playerName}-${x.playerValue}`)}`
    }
    transferWindowResult(){
        let res=`Players list:\n`;
        let sortedPlayers=this.invitedPlayers.sort((a,b)=>a.playerName.localeCompare(b.playerName));
        // sortedPlayers.map(x=>`Player- ${x.playerName}-${x.playerValue}`);
        sortedPlayers.forEach(element => {
            res+=`Player- ${element.playerName}-${element.playerValue}\n`
        });
        return res.trim();
}
}
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



