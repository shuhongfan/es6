const fs=require('fs')

// fs.readFile('./1-let.html',(err,data)=>{
//     if (err) throw err
//     console.log(data.toString())
// })

const p=new Promise(function (resolve,reject) {
    fs.readFile('./1-let1.html',(err,data)=>{
        if (err) reject(err)
        resolve(data)
    })
})

p.then(function (value) {
    console.log(value)
},function (reason) {
    console.log(reason)
})
