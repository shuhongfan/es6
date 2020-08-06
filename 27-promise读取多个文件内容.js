var fs=require('fs')

// fs.readFile('1-let.html',(err,data)=>{
//     fs.readFile('2.html',(err,data1)=>{
//         fs.readFile('3-const.html',(err,data2)=>{
//             let result=data1+data2+data
//             console.log(result)
//         })
//     })
// })

const p=new Promise((resolve, reject) => {
    fs.readFile('1-let.html',(err,data)=>{
        resolve(data)
    })
})
p.then(value => {
    console.log(value.toString())
    return new Promise((resolve, reject) => {
        fs.readFile('2.html',(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value => {
    console.log(value.toString())
    return new Promise((resolve, reject) => {
        fs.readFile('3-const.html',(err,data)=>{
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'))
})
