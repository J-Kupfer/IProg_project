const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: false
    },
    
    date:{
        type: Date,
        required: true,
        default: Date.now
    }/*,
    id: {
        type: String,
        required: True,
        default: UserID + IDNumber
    }
    */
    
});

module.exports = mongoose.model('User', UserSchema);

