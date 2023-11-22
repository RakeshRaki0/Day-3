//1.How to compare  two json have the same properties without order?

let obj1 = {name: "person 1", age:5};
let obj2 = {age:5, name:"person 1"};

if (obj1 === obj2){
    console.log("It has the same properties");
}
else{
    console.log("It has not in the same properties");
}