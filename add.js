// function to add sum of number (option 1)
const add = (x,y) =>{
    this.sum = x + y;
    console.log(this.sum);
     }
add()

// function to add sum of number (option 2) using reduce
const addII = (array) =>{ 
    const reducer = (x,y) =>  x+y;
    return array.reduce(reducer);
}



arrayList = [3,4,5,6,7];
console.log(addII(arrayList));


