const mongoose = require('mongoose')
// Schema for a user, has a name, username, email, contact, array to store reserved item objects, and array to store item history
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: "/default.jpg",
    },
    contact: {
        type: String,
    },
    reserved_items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
            },
        },
    ],
    item_history: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
            },
        },
    ],
    favorites: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
            }
        }
    ]
})

//export schema 
module.exports = mongoose.model('User', UserSchema)
