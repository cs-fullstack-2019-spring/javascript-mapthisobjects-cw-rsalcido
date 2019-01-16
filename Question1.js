// Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array.
// Print the new array of objects.
//     let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects


let pets = ["dog", "cat", "pig", "hamster"];



var pet_objects=pets.map (function(petnumber, pettype)


{
    let newObj = {};
    newObj.pet = pettype;
    newObj.val = petnumber;
    return newObj;
})

// var pet_objects = pets.map();
console.log(pet_objects)