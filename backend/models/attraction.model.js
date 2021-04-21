var mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

var Schema = mongoose.Schema;


const AttractionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    status: { type: String },
    image: { data: Buffer, contentType: String }
});

// AttractionSchema.plugin(mongoosePaginate);

const Attraction = mongoose.model('attractions', AttractionSchema);

// const options = {
//     page: 1,
//     limit: 2
// };

// Attraction.paginate({}, options)
//     .then(result => {})
//     .catch(error => {});

module.exports = Attraction;