const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/home'));
app.use('/services', require('./routes/services'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

