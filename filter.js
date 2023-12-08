let objects = [ 
    {firstName: "Deb", lastName: "Lin", age: 34},
    {firstName: "Fedora", lastName: "Lin", age: 25},
    {firstName: "Kali", lastName: "Lin", age: 55}, 
]


let filteredObjects = objects.filter((element, index, array) => {
    return element.age > 30
})
console.log(filteredObjects);
console.log(objects);