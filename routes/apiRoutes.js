const router = require('express').Router();
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})
 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const notes = createNewNote(req.body, notes);

    res.json(notes);
});

router.get('/db/db.json', (req, res) => {

})
module.exports = router;