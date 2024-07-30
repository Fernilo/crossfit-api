const fs = require('fs')

const saveToDatabase = (DB) => {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2))
}

module.exports = {saveToDatabase}
