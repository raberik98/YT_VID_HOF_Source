let numbers = [ 11, 2, 30 ]
let strings = [ "Deb", "Fedora", "Kali" ]
let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]

// numbers.sort((a,b) => {
//     return b-a
// })
// console.log(numbers);

strings.sort((a,b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
})
console.log(strings);