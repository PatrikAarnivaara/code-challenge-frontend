const express = require('express');
const cors = require('cors');
/* const path = require('path'); */
const app = express();

app.use(cors());

/* app.use(express.static('build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); */

app.use('/client', express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is live on port ${port}!`));
