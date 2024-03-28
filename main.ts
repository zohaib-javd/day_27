// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

let car = {
    make: "Tesla",
    model: "CyberTruck",
    year: 2024
};

console.log(car.model);

console.log("\n");

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

car.color = "Silver";
car.year = 2023;

console.log(car);

console.log("\n");

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

logObjectProperties({ make: "Tesla", model: "CyberTruck", year: 2024, color: "Silver" });