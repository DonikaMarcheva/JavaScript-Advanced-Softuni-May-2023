class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        let candidateNames = new Set();
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            let searchedCandidate = this.jobCandidates.find(x => x.name === name);
            if (searchedCandidate === undefined) {
                this.jobCandidates.push({ name, education, yearsExperience });
                candidateNames.add(name);
            } else {
                if (searchedCandidate.yearsExperience < yearsExperience) {
                    searchedCandidate.yearsExperience = yearsExperience;
                    searchedCandidate.education=education;
                    candidateNames.add(name);
                }
            }
        });
        let namesAddedArr = Array.from(candidateNames);
        return (`You successfully added candidates: ${namesAddedArr.join(', ')}.`);
    }
    jobOffer(chosenPerson) {
        // here check!!!!
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience=Number(minimalExperience);
        let searchedCandidate = this.jobCandidates.find(x => x.name === name);
        if (searchedCandidate === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        } 

            if (minimalExperience >searchedCandidate.yearsExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } 
                searchedCandidate.yearsExperience = 'hired';
                return `Welcome aboard, our newest employee is ${name}.`;
            
        }
    
    salaryBonus(name) {
        let searchedCandidate = this.jobCandidates.find(x => x.name === name);
        if (searchedCandidate === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        } else {
            if (searchedCandidate.education === 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (searchedCandidate.education === 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error(`Candidate Database is empty!`);
        } else {
            let sortedCandidates = this.jobCandidates
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(x => `${x.name}-${x.yearsExperience}`);
            let res = `Candidates list:\n`;
            res += sortedCandidates.join('\n');
            return res.trim();
        }
    }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "John Doe-Bachelor-11", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());



