const express = require('express');
const app = express();

app.get('/', (req, res, next) => res.send('<h1>Hello World! working Application</h1>'));

app.listen(8080, () => console.log('app listening on port 8080!'));
