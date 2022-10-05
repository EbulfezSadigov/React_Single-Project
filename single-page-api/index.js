const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://abulfaz:ebulfez1995@cluster0.hnqdmkq.mongodb.net/users?retryWrites=true&w=majority",
  { useNewUrlParser: true }
  );


  
//DB TABLE
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  birthdate: Date,
  email: String
});

//Post
app.post("/users", (req, res) => {
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    email: req.body.email
  });
  user.save();
  res.send("Success!!");
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;
  
    User.findById(id, (err, doc) => {
      if (!err) {
        if (doc) res.json(doc);
        else res.status(404).json({ message: "Not found!" });
      } else {
        res.status(500).json(err);
      }
    });
  });

const User = mongoose.model("User", userSchema);

//GETALL
app.get("/users", (req, res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

app.listen(3000, () => {
    console.log("Server is running!!");
  });


