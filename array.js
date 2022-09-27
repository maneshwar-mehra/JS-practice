// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.length);

// // push

// arr.push(10)
// console.log("push", arr);

// // pop
// arr.pop()
// console.log("pop", arr);

// // shift

// arr.shift()
// console.log("shift", arr);

// // unshift

// arr.unshift(1)
// console.log("unshift", arr);




// .indexOf and lastIndexOf are used with primitive data type

// new_arr = ["Mane", "Sneha", "Harsh", "Kunal", "Abhay", "Sneha"]

// console.log(new_arr.indexOf("Sneha"));

// console.log(new_arr.lastIndexOf("Kunal")); // nahi samajh aya






// arr = [
//     {
//         name: "iphone 11",
//         price: 30000
//     },
//     {
//         name: "iphone 12",
//         price: 40000
//     },
//     {
//         name: "iphone 13",
//         price: 50000
//     }
// ]


// // .find is used with reference data types
// abc = arr.find(function (element) {
//     return (element.price > 40000);
// })

// console.log(abc);



// // concat
// arr1 = ["Mane", "Sneha", "Kunal"]
// arr2 = ["abhay", "Harsh", "Naveen"]

// console.log(arr1.concat(arr2));


// // spread operator

// arr1 = ["apple", "banana", "mango"]
// arr2 = ["kiwi", "melon", "pear"]

// arr3 = [...arr1]
// console.log(arr3);





// // for of

// arr1 = [2, 4, 10, 14, 17]
// for (i of arr1) {
//     console.log(i);
// }


// // for Each

// arr1 = [2, 4, 10, 14, 17]

// arr1.forEach((element) => {
//     console.log(element);
// })



// // .join

// arr1 = ["m", "a", "n", "e", "s", "h", "w", "a", "r"]
// console.log(arr1.join(""));
// console.log(arr1.join("^"));


// .filter

arr1 = [{
    name: "UP",
    population: 10000
},
{
    name: "MP",
    population: 15000
},
{
    name: "Himachal",
    population: 20000
},
{
    name: "Telangana",
    population: 25000
},
{
    name: "Ladakh",
    population: 30000
}
]

console.log(arr1.filter((element) => {
    return element.population > 12000
}));

console.log(arr1.map((element) => {
    return element.population * 2
}));