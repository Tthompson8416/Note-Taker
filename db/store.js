const fs = require("fs")
const util = require("util")
// const uuidv1 = require('uuid/v1')

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

    addNotes() {
        return this.write().then((notes) => {
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

}

module.exports = new Store();