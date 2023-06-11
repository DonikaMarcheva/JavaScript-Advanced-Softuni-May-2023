class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources <= 0) {
                throw new Error(`You don't have enough resources to start the hike`);
            } else {
                let difference = this.resources - time * 10;
                if (difference < 0) {
                    return "You don't have enough resources to complete the hike";
                } else {
                    this.listOfHikes.push({ peak, time, difficultyLevel });
                    this.resources -= time * 10;
                    return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`
                }
            }
        }
    }
    rest(time) {
        this.resources += 10 * time;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        } else if (criteria === 'hard' || criteria === 'easy') {
            let searchedHikes = this.listOfHikes.filter(x => x.difficultyLevel === criteria);
            if (searchedHikes.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            } else {
                let searchedPeak = searchedHikes.sort((a, b) => a.time - b.time)[0];
                return `${this.username}'s best ${criteria} hike is ${searchedPeak.peak} peak, for ${searchedPeak.time} hours`
            }
        } else {
            let res = `All hiking records:\n`
            this.listOfHikes.forEach(hikeObj => {
                res += `${this.username} hiked ${hikeObj.peak} for ${hikeObj.time} hours\n`
            });
            return res.trim();
        }
    }
}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




