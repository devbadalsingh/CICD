const express = require('express')
const app = express();

const PORT =  3000; 

app.get('/',(req,res)=>{
    return res.json({
        message : `Hello their`
    })
})

console.log("Hello ")

app.listen( PORT,()=>{
    console.log("The app is ")
} )
