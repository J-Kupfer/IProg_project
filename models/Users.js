const mongoose = require ('mongoose');
const IDNumber = 0;
const UserID = u;
const BountyID = b;

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: True
    },
    password:{
        type: String,
        required: True
    },
    
    date:{
        type: Date,
        required: True,
        default: Date.now
    }/*,
    id: {
        type: String,
        required: True,
        default: UserID + IDNumber
    }
    */
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;