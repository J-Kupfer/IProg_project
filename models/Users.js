const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    bounty: {
        type: Number,
        required: true,
        default: 0
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
    
});

module.exports = mongoose.model('User', UserSchema);

