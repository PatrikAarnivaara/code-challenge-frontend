const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 4000;
/* let root = path.join(__dirname, 'client/build/');
app.use(express.static(root)); */

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
 })

app.listen(port, () => console.log(`App is live on port ${port}!`));
