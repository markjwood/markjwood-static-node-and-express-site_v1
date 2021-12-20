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

app.get('/projects/:id', (req, res, next) => {
	const id = req.params.id;
	if (!data.projects[id]) {
		const err = new Error("That project doesn't exist");
		err.status = 404;
		next(err);
	}
	res.render('project', { project: data.projects[id] });
});

app.use((req, res, next) => {
	const err = new Error("That page doesn't exist");
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	err.status = err.status || 500;
	err.message = err.message || 'Something went wrong!';

	res.locals.error = err;
	res.status(err.status);

	console.error(err.message + ` (${err.status})`);

	// 404 page
	if (err.status === 404) {
		res.render('page-not-found');
	} else {
		// default error page
		res.render('error', err);
	}
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});
