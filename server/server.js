const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const path = require('path');
/* app.use(express.static('client/build')); */

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is live on port ${port}!`));
