function updateBrand(obj){
    // Mutating the obejct outside the function 
    obj.brand = "Toyota";

    //Try to reassign the parameters, but this won't affect
    // The variable's value outside the function
    obj = null;
    
}

const car = {
    brand: "Honda",
    model: "Accord",
    Year: 1999,
};


console.log(car.brand); //Honda

updateBrand(car);

console.log(car.brand);// Toyota