const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
// For heroku
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      res.status(404).send();
    }
    res.status(200).send({todo});

  }).catch(() => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Started on port ${port}.`);
});

module.exports = {app};
