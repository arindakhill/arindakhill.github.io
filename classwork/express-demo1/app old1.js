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

//2. instantiation
const app = express();

//3. configure
app.set('port',process.env.PORT || 3000);
const port = app.get('port')
console.log(port);
app.disable('case sensitve routing');

app.use(express.urlencoded());

//4.Middleware
app.use('/search', (req,res,next)=>{
    console.log(req.query)
    res.end('query string')


})

app.use('/users/:uid/posts/:pid/comments/:cid',(req,res)=>{
    res.send(`uid:${req.params.uid}, pid:${req.params.pid}, cid:${req.params.cid}`)
})







//7. Boot up
app.listen(port,()=>{
    console.log(`Your server is running on ${port}`)
})