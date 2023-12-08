let numbers = [ 1, 2, 3 ]
let strings = [ "Deb", "Fedora", "Kali" ]
let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]

// numbers.forEach((element, index, array) => {
//     array[index]++
// })
// console.log(numbers);

// strings.forEach((element, index, array) => {
//     array[index] = `${ element } ${ index }`
// })
// console.log(strings);

objects.forEach((element) => {
    console.log(`${element.firstName} ${element.lastName} is ${element.age} old.`);
})