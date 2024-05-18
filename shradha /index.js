// setTimeout(()=>{
//     console.log("hello");
// },2000);


// function sum(a,b){
//     console.log( a+b);
// }
// function calculator(a,b,sumcal){
//     sumcal(a,b);
// }
// calculator(1,2,(a,b)=>{
// console.log(a+b);
// });

//  function hello(){
//     console.log("hello");
// }
// setTimeout(hello,3000);

// ----------------------------
// function getData(id,nextData){
//    setTimeout(()=>{
//     console.log(id);
//     if(nextData){
//         nextData();
//     }
//    },1000)
// }
// // call back hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });
// -------------------------------------

// promise
// let promise= new Promise((r,e)=>{
//     console.log("iam a promise");
// })

function getData(id,nextData){
    return new Promise((resolve,reje)=>{
        setTimeout(()=>{
            console.log(id);
            resolve("success");
            if(nextData){
                nextData();
            }
        })
    })
}
// let final=getData(123);
// final

function asyncfunction(){
    return new Promise((resolve,rej)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("success");
        },1000)
    })
}
// let p1=asyncfunction();
// console.log("fetching data 1");
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     let p2=asyncfunction();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })

// ----- another way


// console.log("fetching data 1");
// asyncfunction().then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     asyncfunction().then((res)=>{
//         console.log(res);
//     })
// })
// --------------------------------------
//  Async await 
// await pauses the execution of its surrounding async funtion until the promise is settled

// async function hello(){
//     console.log("hello");
// }
// function api(){
//     return new Promise(( resolve,reje)=>{
//         setTimeout(()=>{
//             console.log("getting data");
//             resolve(200)
//         },1000)
//     })
// }
// async function getdata(){
//     await api()
// }
// getdata();

function getData(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(getId);
        resolve("success")
        },1000)
    })
}
async function getAllData(){
    await getData(1)
    await getData(2)
    
        await getData(i);
}
getAllData();