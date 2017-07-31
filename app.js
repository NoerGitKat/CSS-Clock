const express = require('express');
const app = express();

app.set('views', 'public/views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('clock');
});

const server = app.listen(3000, () => {
	console.log("The clock is ticking at port: " + server.address().port);
});