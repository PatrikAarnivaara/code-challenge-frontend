 const express = require('express');
 const app = express();

 //Below code is to point to your react build folder which you will keep inside server folder inside client folder

 let root = path.join(__dirname, 'client/build/')
 app.use(express.static(root))
 
 //this is the routing which will redirect your server url to react build file
 app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
 })

 app.listen(process.env.PORT || 3000);