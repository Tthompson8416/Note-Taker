const router = require('express').Router();


router.get('/api/public/notes.html', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

post 
router.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    //add animal to json file and animals array in this function
    const notes = createNewNote(req.body, notes);

    res.json(notes);
});
