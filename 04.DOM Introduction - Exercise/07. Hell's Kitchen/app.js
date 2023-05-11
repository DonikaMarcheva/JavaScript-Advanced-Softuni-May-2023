function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantField = document.querySelector('#bestRestaurant p');
      let workersField = document.querySelector('#workers p');

      let restaurantsObj = {};
      let averageSalaryObj = {};
      for (const restaurant of restaurants) {
         let [name, workers] = restaurant.split(' - ');
         let workersArr = workers.split(', ');
         if (!restaurantsObj.hasOwnProperty(name)) {
            restaurantsObj[name] = {};
         }
         for (const workerData of workersArr) {
            let [workerName, salary] = workerData.split(' ');
            salary = Number(salary);
            restaurantsObj[name][workerName] = salary;
         }
         let workersCount = Object.entries(restaurantsObj[name]).length;
         let values = Object.values(restaurantsObj[name]);
         let totalSalary = values.reduce((a, c) => a + c, 0);
         let averageSalary = totalSalary / workersCount;
         averageSalaryObj[name] = averageSalary;
      }
      let sortedAvgSalaries = Object.entries(averageSalaryObj).sort((a, b) => b[1] - a[1]);
      let bestRestaurant = sortedAvgSalaries[0][0];
      let bestAverageSalary = sortedAvgSalaries[0][1];
      let bestRestaurantObj = restaurantsObj[bestRestaurant];
      let sortedSalaries = Object.entries(bestRestaurantObj).sort((a, b) => b[1] - a[1]);
      bestRestaurantField.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${(sortedSalaries[0][1]).toFixed(2)}`;
      let text = '';
      for (const workerInfo of sortedSalaries) {
         text += `Name: ${workerInfo[0]} With Salary: ${workerInfo[1]} `;
      }
      workersField.textContent = text;
   }
}

//case 10 ["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660","TheLake - Bo 10, Jo 10"]