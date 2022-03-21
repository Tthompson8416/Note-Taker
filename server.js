const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express()
const PORT = process.env.PORT || 3009

// function createNewNote(body, createNewNote {
//     console.log(body);
//     // our function's main code will go here!
  
//     // return finished code to post route for response
//     return body;
//   }

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => console.log(`${PORT}`))