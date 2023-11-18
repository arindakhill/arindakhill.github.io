/**
 * Instructions
1. Create a npm project and install Express.js (Nodemon if you want)
2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers. 
4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
5. Customize your 404 page
6. Provide your own error handling
 */



const express = require('express');
const path = require('path');

//2. instantiation
const app = express();

//3. configure
app.set('port',process.env.PORT || 3000);
const port = app.get('port')
console.log(port);
app.disable('case sensitve routing');

app.use(express.urlencoded());

//4.Middleware
app.get('/product', (req,res,next)=>{
    //console.log('insider /product');
    //res.end("insider product!!")
    // const html=`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
    //     <form action = '/save-product' method = "post">
    //         <p>Title: <input name="title"></p>
    //         <p>Price: <input name="price" type="number" min="1"></p>
    //         <button>Add</button>
    
    
    //     </form>
        
    // </body>
    // </html>`

    res.status(200).sendFile(path.join(__dirname,'add-product.html'))
   //res.send(html)

})


app.post('/product',(req,res, next)=>{
    console.log(req.body);
    res.end("saved successfully!..")

});




//7. Boot up
app.listen(port,()=>{
    console.log(`Your server is running on ${port}`)
})