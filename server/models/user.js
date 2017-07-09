var mongoose = require('mongoose');

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1
    },
    role: {
        type: Number,
        required: true,
        default: 1 // Member
    }
});

module.exports = { User };

// var newUser = new User({ email: "ketan811@gmail.com" });

// newUser.save().then((doc) => { console.log("User Added", JSON.stringify(doc, undefined, 2)) }, (e) => { console.log("Unable to Add User", e) });