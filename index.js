const express = require('express')
const app = express();

const PORT =  3000; 

app.get('/',(req,res)=>{
    return res.json({
        message : `Hello their sucessfully worked on ci/cd with pm2`
    })
})

console.log("Hello ")
console.log("NEw things added here with the latest pm2 ")

app.listen( PORT,()=>{
    console.log("The app is ")
} )
