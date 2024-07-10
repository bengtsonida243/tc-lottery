const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to serve index.ejs
app.get('/', (req, res) => {
    res.render('index', { secretKey: process.env.SECRET_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
