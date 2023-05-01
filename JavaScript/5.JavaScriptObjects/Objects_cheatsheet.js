// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

//Adding Property
dog["price"]=1000;
// {name: 'Rusty', breed: 'unknown', isAlive: false, age: 7, price: 1000}

//Deleting Property
delete dog.price;
true