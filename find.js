let numbers = [ 1, 2, 3 ]
let strings = [ "Deb", "Fedora", "Kali" ]
let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]


// let result1 = numbers.find((element, index, array) => {
//     return element > 2
// })
// console.log(result1);

// let result2 = strings.find((element) => {
//     return element.includes("li")
// })
// result2 = "asd123"
// console.log(result2);
// console.log(strings);

let result3 = objects.find((element) => {
    return element.age > 32
})
result3.age = 100
console.log(result3);
console.log(objects);




