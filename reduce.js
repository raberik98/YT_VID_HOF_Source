let numbers = [ 1, 2, 3 ]
let strings = [ "Deb", "Fedora", "Kali" ]
let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]


// let result1 = numbers.reduce((acc, element, index, array) => {
//     if (acc < element) {
//         acc = element
//     }
//     return acc
// }, numbers[0])
// console.log(result1);

// let result2 = strings.reduce((acc,element) => {
//     //return acc += ` ${element}`
//     return `${acc} ${element}`
// }, "")
// console.log(result2);

let result3 = objects.reduce((acc,element) => {
    if (acc.youngestAge > element.age) {
        acc.youngestAge = element.age
        acc.youngestName = element.firstName
    }
    if (acc.oldestAge < element.age) {
        acc.oldestAge = element.age
        acc.oldestName = element.firstName
    }
    return acc
}, { youngestName: objects[0].firstName, youngestAge: objects[0].age, oldestName: objects[0].firstName, oldestAge: objects[0].age})
console.log(result3);
