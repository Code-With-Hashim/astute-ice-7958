const mongoose = require('mongoose')


const Prawns_Collection_Schema = mongoose.Schema({


    "img-container src": String,
    "tablescraper-selected-row": String,
    Category_type: String,
    Category_List: String,
    Food_list: []

}, {
    versionKey: false,
    timeStamp: true
})

const Prawns_Collection_modal = mongoose.model("Prawns_Collection", Prawns_Collection_Schema)


module.exports = { Prawns_Collection_modal }