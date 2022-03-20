const router = require('express').Router();
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes)
    })
        .catch((err) => res.status(500).json(err))
})

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))

    // const notes = addNote(req.body, notes);
    // req.body.id = notes.length.toString();


    // res.json(notes);
});

router.delete('/notes', (req, res) => {
    store
        .deleteNote(req.params.Id)
        .then((note) => res.json(note))
});

    router.get('/db/db.json', (req, res) => {

    })
    module.exports = router;
