// FILTER
//
// Use .filter to create an array of pet objects that only holds the hamsters.






//let pets = ["dog", "cat", "pig", "hamster"];
let pets = [
{
    name: 'Spot',
    type: 'Hamster',
},
{
    name: 'Harry',
    type: 'Hamster',
},
{
    name: 'Kitty',
    type: 'Cat',
},
];

var hamsters =pets.filter (
    function(eachelement)
{
        return (eachelement.type === "Hamster");

});

console.log(hamsters);

// let hamsters = data.filter(function (pets) {
//     return hamster=== "Hamster";
//
// });