// const customer=[{custId:1,name:"Ranjana",
//     bought:[
//     {id:1, name:"shoes",}
// ,{id:2, name:"nailpolish"}]},

// {
//     custID:2, name:"rajina",

//     bought:
//     [{id:4, name:"tiffin",},
//         {id:5, name:"bottle"},
        
//     ]
// },

// {
//     custID:3, name:"Ashish",

//     bought:
//     [{id:4, name:"pen",},
//         {id:5, name:"copy"},
        
//     ]
// },


// {
//     custID:4, name:"Nirjal",

//     bought:
//     [{id:4, name:"Phone",},
//         {id:5, name:"book"},
        
//     ]
// }
// ]




// //backened data
// const customerResponse={
//     status:200,
//     message:"Customer fetched successfully",
//     data:customer,

// }
// //arrow function 
// const getProductsName = () => {
//     if (customerResponse.status === 200) {
//         let boughtItems = [];
//         customerResponse.data.forEach((customer) => { //loop in customer variable ma 
//             customer.bought.map((item) => { //  kind of varibale given to bought ko    and map is ruesl in arrow function   
//                 boughtItems.unshift(item.name);//push       to store the value in boughtTems ma 
//             });
//         });
//         return boughtItems; // Optional: return the result
//     }
// };

// console.log(getProductsName());




///

// const customer=[{custId:1,name:"Ranjana",
//     bought:[
//     {id:1, name:"shoes",}
// ,{id:2, name:"nailpolish"}]},

// {
//     custID:2, name:"rajina",

//     bought:
//     [{id:3, name:"tiffin",},
//         {id:4, name:"bottle"},
        
//     ]
// },

// {
//     custID:3, name:"Ashish",

//     bought:
//     [{id:5, name:"pen",},
//         {id:6, name:"copy"},
        
//     ]
// },


// {
//     custID:4, name:"Nirjal",

//     bought:
//     [{id:2, name:"nailpolish"},
//         {id:6, name:"copy"},
        
//     ]
// }
// ]




//backened data
const customerResponse={
    status:200,
    message:"Customer fetched successfully",
    data:customer,

}
// //arrow function 
// const getProductsNames = () => {
//     if (customerResponse.status === 200) {
//         let boughtItems = [];
//         customerResponse.data.forEach((customer) => { //loop in customer variable ma 
//             customer.bought.map((item) => { //  kind of varibale given to bought ko    and map is ruesl in arrow function   
//                 boughtItems.unshift(item.name);//push       to store the value in boughtTems ma 
//             });
//         });
//         return boughtItems; // Optional: return the result
//     }
// };

// //console.log(getProductsName());
// // data={
// //     copy:2,
// //     nailpolish:3
// // }

// //output

// const getProductNumber=()=> {
//     if(customerResponse.status==200)
// {
//     let productNumbers={};
//     customerResponse.data.forEach((customer)=>{
//         customer.bought.map((item)=>{
            {
                if(productNumbers[item.id]) {
                    productNumbers[item.id]+=1;
                }else {
                    productNumbers[item.id]=1;
                }
     }

//         });
//     });
//     return productNumbers;
// }
// };

// console.log(getProductNumber());



 



 container=[
    {id:1,  name:"Ranjana",play:[{id:1, game:"basketball"},{id:2, game:"football"}]}
]
,
{
    id:2, name:"rajina", play:[{id:3, game:"cricket"},{id:4, game:"tennis"}]
},
{
    id:3, name:"Ashish", play:[{id:5, game:"badminton"},{id:6, game:"hockey"}]
},
{
    id:4, name:"Nirjal", play:[{id:7, game:"volleyball"},{id:8, game:"rugby"}]
}



const containerResponse = {
    status:300,
    message:"all played well",
    data:container,

}
let getGamesPlayed = () => {
    if (containerResponse.status === 300) {
        let gamesPlayed = [];
        containerResponse.data.forEach((player) => {
            player.play.map((game) => {
                gamesPlayed.unshift(game.game);
            });
        });
        return gamesPlayed;
    }
};





