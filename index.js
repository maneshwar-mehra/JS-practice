// var a = 10

// var b = 20

// total = a + b

// console.log(total);




// a = 10
// b = 101

// if (a == b) {
//     console.log("yes")
// } else {
//     console.log("no")
// }




// for (i = 0, j = 2; i <= 10; i++) {
//     console.log(i * j);
// }


// for (i = 1; i < 10; i++) {
//     if (i == 5) {
//         continue
//     }
//     console.log(i);
// }


// var obj = {
//     name: "mane",
//     age: 20,
//     gender: "male"
// }

// for (i in obj) {
//     console.log(i, obj[i]);
// }




// arr = ["laptop", "mobile", "earphone", "tab"]

// for (i in arr) {
//     console.log(arr[i]);
// }


// for (i of arr) {
//     console.log(i);
// }


// var random_str = "hello world"

// console.log(random_str.length);
// console.log(random_str.slice(4, 8));



// var obj = {
//     name: "mane",
//     age: 20,
//     gender: "male"
// }
// var abc = "age"

// console.log(obj.name);
// console.log(obj["gender"]);
// console.log(obj[abc]);


// var arr = ["pencil", "rubber", "sharpner", "scale"]

// for (i of arr) {
//     console.log(i);
// }

// for (j in arr) {
//     console.log(arr[j]);
// }


// function abc(a, b) {
//     return (a - b)
// }

// console.log(Math.abs(abc(10, 20)));







// const data = {
//     name: "maneshwar",
//     age: 20,
//     gender: "male",
//     nested_obj: {
//         course: "BCA",
//         semester: 5,
//         fees: 40000
//     },
//     show() {
//         console.log("Hello World!");
//     }
// }

// console.log(data.gender);
// data.show()


// factory function

// function abc() {
//     const data = {
//         name: "maneshwar",
//         age: 20,
//         gender: "male",
//         nested_obj: {
//             course: "BCA",
//             semester: 5,
//             fees: 40000
//         },
//         show() {
//             console.log("Hello World!");
//         }
//     }
//     return data

// }

// const value = abc()

// console.log(value.nested_obj);






// function xyz() {
//     return {
//         name: "maneshwar",
//         age: 20,
//         gender: "male",
//         nested_obj: {
//             course: "BCA",
//             semester: 5,
//             fees: 40000
//         },
//         show() {
//             console.log("Hello World!");
//         }
//     }

// }

// console.log(xyz().nested_obj);





// Constructor function

// function Random(title) {
//     this.title = title
//     this.show_msg = function () {
//         console.log("Hello World!");
//     }
// }

// const result = new Random("Mane")


// // to add a function into (Random)
// result.func_added = function () {
//     console.log("added the function");
// }

// // to delete any property
// // delete result.title

// console.log(result);
// console.log(result.title);
// console.log(result.show_msg());







// const product = {
//     itemName: "mobile",
//     price: 10000,
//     discount: 15,
//     itemCode: "zaxd"
// }

// as factory function

// function factory() {
//     return {
//         itemName: "mobile",
//         price: 10000,
//         discount: 15,
//         itemCode: "zaxd"
//     }
// }

// const abc = factory()
// console.log(abc.itemCode);
// console.log(abc.price);


// as constructor function

// function Cons(itemName, price, discount, code) {
//     this.itemName = itemName
//     this.price = price
//     this.discount = discount
//     this.itemCode = code
//     this.discount_amt = function () {
//         return (price * discount / 100) // function to get discounted amount
//     }
// }

// const xyz = new Cons("mobile", 10000, 20, "ydgab")

// console.log(xyz.discount_amt());






