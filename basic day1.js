const arr1 = [1, 2, 3, 4]
const arr2 = [5,6,7,8,9]
console.log(arr2)
const arr3=[...arr1,...arr2]  // spread operator
console.log(arr3)
// arr3.push(10)
// console.log(arr3)
// arr3.pop()
// console.log(arr3)
// arr3.unshift(11)
// console.log(arr3)
// arr3.shift()
// console.log(arr3)
console.log(arr3[1])

const userData={  //creates an object
    name:"rajina",
    roll:1,
    isAdmin:false, //falsy value
    subjects:undefined, //falsy value
    image:undefined,
}
function sanitizeData(){
    let result={}
    for(let key in userData){ //key =name
        if(userData[key]){  //key = rajina
            result={...result,[key]:userData[key]}  
        }

    }
    return result
}
console.log(sanitizeData())  // it returns only truthy value

const arr=[1,2,3,4,5,6,7,8,9,10,11]
function filterEvenNum(){
    arr.map((num)=>{    //arrow function= ()=>{}
        return (   //return of arrow function or loop
            num*2
        )

    })
    const result=arr.map((num)=>num*2)
    return result   // return of whole function
}
console.log(filterEvenNum())
console.log(userData.name)   // gives the value of name
console.log(userData["name"]) // gives the value of name


console.log(1 + 1)
console.log("1"+ "1")
console.log(1 + "1")
console.log(1 + 1 + "1")


// Compare arrays by value using JSON.stringify
console.log(JSON.stringify([]) === JSON.stringify([])) //makes object lai string     
const a = []
const b=[]
console.log(a===b);
console.log(a == b);

console.log(typeof 1)
console.log(typeof [])
console.log(typeof NaN) // satnds for "Not-a-Number"
                        // valid, built-in value
console.log(typeof Nan)
console.log("type");