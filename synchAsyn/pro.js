//promises

// var promisesession=new promise((res,rej)=>{
//     let avgWatchTime=2
//     if(avgWatchTime>1){
//         res("completed")
//     }
// })

// promisesession.then(res=>console.log("less start fetch")).catch(err=>console.log("watch again"))

// var marriagepromise=new promise((acce,rej)=>{
//     let promiseTime=2
//     if(promiseTime>1){
//         acce("success")
//     }
// })

// marriagepromise.then(acce=>console.log("marriage proposal")).catch(err=>console.log("rejected"))

var luckyContext=new Promise((res,rej)=>{
    let yourNum=6
    let lotNum=parseInt(Math.random()*10)
    if(yourNum==lotNum){
        res("you win")
    }
})

luckyContext.then(res=>console.log("you will by a new car"))