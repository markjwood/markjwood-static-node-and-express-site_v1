const express = require('express');
const app = express();

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

app.listen(3000);
