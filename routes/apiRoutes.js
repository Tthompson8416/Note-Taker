const router = require('express').Router();
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})


 
// router.post('/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();

//     //add animal to json file and animals array in this function
//     const notes = createNewNote(req.body, notes);

//     res.json(notes);
// });

// router.get('/db/db.json', (req, res) => {

// })
module.exports = router;