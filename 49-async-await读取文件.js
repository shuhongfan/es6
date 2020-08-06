const fs=require('fs')

function readM1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./src/m1.js',(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}
function readM2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./src/m2.js',(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}
function readM3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./src/m3.js',(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
    })
}
async function main() {
    let m1=await readM1()
    let m2=await readM2()
    let m3=await readM3()
    console.log(m1.toString())
    console.log(m2.toString())
    console.log(m3.toString())
}
main()
