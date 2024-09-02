
let a =10;
let b =0;;

// setTimeout(()=>{
//    b=30;
// },2000);

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
})
waitingData.then((data)=>{
    console.log(data+a);
})

// console.log("starting up..");

// setTimeout(()=>{
//     console.log("2 sec delay");
// },2000);


// setTimeout(()=>{
//     console.log("0 sec dealy");
// });

// console.log("Ending up ..");