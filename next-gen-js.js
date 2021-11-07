// arrow function 
const greet = () => "hello World";
const addTwoNum = (num1, num2)=>{
    return num1 + num2;
}

// spread operator 
let numbers = [1,2,3];
let newNumbers = [...numbers,4,5,6];
console.log(newNumbers);

// Rest operator // Except unlimited argument as an array 
const sum = (...args)=>{
    console.log(args);
}
sum(34,90,98);

//Destructuring 
const course = {
    courseName:".Net core",
    price: "N/A",
    details:{
        duration:"2 Hours"
    }
}
const {courseName} = course;
console.log(courseName);
const {details : {duration}} = course;
console.log(duration);


// Array methods 

//filter Note: doesn't modify the actual array
let nums = [1,3,5,6,7,8,10];
let filterArray = nums.filter((num)=>{
    return num % 2 == 0;
}) 
console.log(filterArray);
//find  Note: doesn't modify the actual array
let findArray = nums.find((num)=>{
    return num > 9 ;
})
console.log(findArray)
//findIndex
let findIndexArray = nums.findIndex((num)=>{
    return num > 9;
})
console.log(findIndexArray);
//slice  Note: doesn't modify the actual array
let slicedArray = nums.slice(2,6);
console.log(slicedArray);
//concat Note: doesn't modify the actual array
let concatArray = nums.concat(120,420,1000);
console.log(concatArray);

//splice  Note: modifies  the actual array
let splicedArray = nums.splice(1,2,'Newly added');
console.log(splicedArray);

console.log(nums);

//push  Note: modifies  the actual array
let pushArray = nums.push(34,35,36);
console.log(nums);

//map  Note: it doesn't modifiy  the actual array but return a new array
let mappedArray = nums.map((ele)=>{
    return ele+1;
})
console.log(mappedArray);
console.log(nums);

