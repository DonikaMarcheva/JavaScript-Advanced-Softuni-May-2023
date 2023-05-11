function fruit(fruit, grams, priceInKg) {
    let kg = grams / 1000;
    let money = kg * priceInKg;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)