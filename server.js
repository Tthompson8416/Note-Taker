const fs = require('fs');
const path = require('path');

const { notes } = require('./db/db.json');
const express = require('express');

const PORT = process.env.PORT || 3009;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

function createNewNote(body) {
    const note = body;
         notesArray.push(note);
         fs.writeFileSync(
        path.join(_dirname, './db/db.json'),
        JSON.stringify({notes: notesArray }, null, 2)
    );

    return note;

}

app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './db/public/index.html'));
  });

app.listen(PORT, () => console.log('listening on port: ${PORT}'));


// post 
// app.post('/api/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();

//     //add animal to json file and animals array in this function
//     const notes = createNewNote(req.body, notes);

//     res.json(notes);
// });
