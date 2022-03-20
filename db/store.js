const fs = require("fs")
const util = require("util")
const uuidv1 = require('uuidv1')

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            console.log(notes)
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                parsedNotes = []

            }

            return parsedNotes;
        })
    }

    addNote(note) {
        const { title, text } = note
        const newNote = { title, text, id: uuidv1() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote)
    }


    removeNote(note) {
        const { title, text } = note
        const deleteNote = { title, text, id: uuidv1() };

        return this.deleteNote()

    }

    // return this.write().then((notes) => {
    //     console.log(notes)
    //     let parsedNotes;
    //     try {
    //         parsedNotes = [].concat(JSON.parse(notes))
    //     } catch (err) {
    //         parsedNotes = []

    //     }
    //     return parsedNotes;
    // })
}



module.exports = new Store();