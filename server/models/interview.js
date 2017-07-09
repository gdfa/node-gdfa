var mongoose = require('mongoose');

var Interview = mongoose.model('Interview', {
    // id: {
    //     type: Number,
    //     required: true
    // },
    name: {
        type: String,
        required: true,
        trim: true
    },
    organization: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    website: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
    domain: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    interviewBy: {
        type: String,
        required: true,
        default: "Team GDFA"
    },
    interviewByImageUrl: {
        type: String
    }
});

module.exports = { Interview };

// var newInterview = new Interview({
//     name: "John Doe",
//     organization: "XYZ Bank",
//     role: "CIO",
//     date: new Date("05/25/2017"),
//     website: "www.xyz.com",
//     imageUrl: "/assets/images/johndoe.jpg",
//     domain: "Fintech",
//     country: "Singapore",
//     interviewBy: "Ketan"
// });

// // newInterview.save().then((doc) => { console.log("Saved Interview", doc) }, (e) => { console.log("Unable to save", e) });