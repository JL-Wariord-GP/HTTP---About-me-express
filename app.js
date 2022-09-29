const express = require("express");

const app = express();

//! https://localhost:8000
app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Jorge Gomez',
        age: '24',
        pais: 'Colombia',
        verb:request.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Desarrollar','Leer','Musica'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Ser desarrollador Frontend','Trabajar en equipos'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Globant','Google','Meta'],
        verb:req.method
    })
})



app.listen(8000, () => {
    console.log('Server started at port 8000')
})
