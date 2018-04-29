const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ae5cec7871b683a14606d67';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found.');
//   }
//   console.log('Todo by Id', todo);
// }).catch(() => console.log(e));

//User.findById
var id = '5ae4c2a6ad738b4a20f84146';
User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found.');
  }
  console.log('User by Id', user);
}).catch(() => console.log(e));
