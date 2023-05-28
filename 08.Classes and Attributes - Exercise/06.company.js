class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        let args = [name, salary, position, department];
        if (args.some(x => x === '' || x === undefined || x === null) || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let bestSalary = 0;
        let bestDepartment = '';
        for (const key in this.departments) {
            let alldepartmentSalaries = 0;
            let employeeCount = 0;
            let averageSalary = 0;
            for (const employee of this.departments[key]) {
                alldepartmentSalaries += employee.salary;
                employeeCount++;
            }
            averageSalary = alldepartmentSalaries / employeeCount;
            if (averageSalary > bestSalary) {
                bestSalary = averageSalary;
                bestDepartment = key;
            }
        }
        let output = `Best Department is: ${bestDepartment}\n`;
        output += `Average salary: ${bestSalary.toFixed(2)}\n`;

        let bestDepartmentArr = this.departments[bestDepartment];
        bestDepartmentArr.sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => b.salary - a.salary);
        bestDepartmentArr.forEach(element => {
            output += `${element.name} ${element.salary} ${element.position}\n`
        });

        return output.trim();
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
