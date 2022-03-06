const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');

const { notes } = require('./db/db.json');
const express = require('express');

const PORT = process.env.PORT || 3009;
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/', htmlRoutes)

app.use('/api', apiRoutes);




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});





