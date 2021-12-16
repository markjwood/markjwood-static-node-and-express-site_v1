const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json');

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { projects: data.projects });
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/projects/:id', (req, res) => {
	res.render('project', { project: data.projects[req.params.id] });
});

app.use((req, res, next) => {
	const err = new Error("That page doesn't exist");
	err.status = 404;
	console.log(err.message + ` (${err.status})`);
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	// TODO: custom 404 page
	/*
	if (res.status === 404) res.render('not-found');
	*/
	res.render('error');
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});
