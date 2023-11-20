const express = require('express')
const app = express();

app.use(express.json())
const productRouter = require('./routes/product-router');




app.use('/products',productRouter)


app.use((err,req,res,next)=>{
    res.status(500).send(`Server Error ${err.message}`)
})
app.use((req,res)=>{
    res.status(404).send('404! Page not found ')
})



app.listen(3000, ()=>{
    console.log('listening on 3000...')
})