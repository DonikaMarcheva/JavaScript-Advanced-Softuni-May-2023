class Triathlon{
    constructor(competitionName){
        this.competitionName=competitionName;
        this.participants = {};
        this.listOfFinalists = []; 
    }
    addParticipant (participantName, participantGender){
        if((this.participants).hasOwnProperty(participantName)){
            return `${participantName} has already been added to the list`;
        }else{
            this.participants[participantName]=participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }
    completeness (participantName, condition){
        if(!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`);
        }else{
            if(condition<30){
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            }else {
                let completedCount=Math.round(condition/30);
            if(completedCount<=2){
                return `${participantName} could only complete ${completedCount} of the disciplines`
            }else{
                let participantGender=this.participants[participantName];
               delete this.participants[participantName];
               this.listOfFinalists.push({participantName,participantGender});
               return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
        }
    }
    rewarding (participantName){
        let searchedName=this.listOfFinalists.find(x=>x.participantName==participantName);
        if(searchedName){
            return `${participantName} was rewarded with a trophy for his performance`;
        }else{
            return `${participantName} is not in the current finalists list`;
        }
    }
    showRecord (criteria){
        if(this.listOfFinalists.length===0){
            return `There are no finalists in this competition`;
        }
        if(criteria==='all'){
            let res = `List of all ${this.competitionName} finalists:\n`
            let finalists=this.listOfFinalists.sort((a,b)=>a['participantName'].localeCompare(b['participantName']))
                        .map(x=>x.participantName);
                        res+=finalists.join('\n');
                        return res.trim();
        }else{
            let searchedPlayer=this.listOfFinalists.find(x=>x.participantGender==criteria);
            if(!searchedPlayer){
                return `There are no ${participantGender}'s that finished the competition`;
            }else{
                return `${searchedPlayer.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }
    }
}
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));



