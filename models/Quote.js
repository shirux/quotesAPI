const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author',
        required: true
    }
   
});

module.exports = mongoose.model('Quotes', QuoteSchema);
