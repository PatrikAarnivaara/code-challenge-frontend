const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const path = require('path');
/* app.use(express.static('client/build')); */

app.use('/client', express.static(path.join(__dirname, 'build')))
/* app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is live on port ${port}!`));
