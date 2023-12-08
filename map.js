let numbers = [ 1, 2, 3 ]
let strings = [ "Deb", "Fedora", "Kali" ]
let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]

// let retNumbers = numbers.map((element, index, array) => {
//     return element*2
// })
// console.log(retNumbers);
// console.log(numbers);

// let retStrings = strings.map((element, index) => {
//     return `${element} ${index}`
// })
// console.log(retStrings);
// console.log(strings);


let retObjects = objects.map((element) => {
    return { name: `${element.firstName} ${element.lastName}`, age: element.age }
})
console.log(retObjects);