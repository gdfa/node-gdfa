var express = require('express');
var bodyParser = require("body-parser");
var { ObjectID } = require('mongodb');

var { mongoose } = require("./db/mongoose");
var { Interview } = require("./models/interview");
var { User } = require("./models/user");

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/interviews', (req, res) => {
    var interview = new Interview({
        // id: req.body.id,
        name: req.body.name,
        organization: req.body.organization,
        role: req.body.role,
        date: req.body.date,
        website: req.body.website,
        imageUrl: req.body.imageUrl,
        domain: req.body.domain,
        country: req.body.country,
        interviewBy: req.body.interviewBy,
        interviewByImageUrl: req.body.interviewByImageUrl
    });

    interview.save().then(
        (doc) => {
            res.send(doc);
        },
        (e) => {
            res.status(400).send(e);
        });
});


app.get("/interviews", (req, res) => {
    Interview.find().then((interviews) => {
            res.send({ interviews });
        },
        (e) => {
            res.status(400).send(e);
        });
});


app.get("/interviews/:id", (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Interview.findById(id).then((interview) => {
            if (!interview) {
                return res.status(404).send();
            }
            res.send({ interview });
        },
        (e) => {
            res.status(400).send();
        }).catch((e) => {
        res.status(400).send();
    });
});



app.listen(port, () => { console.log("Server started at ${port}") });

module.exports = { app };