var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_CHARCOAL_URI || 'mongodb://localhost:27017/TodoApp');

module.export = {
  mongoose
}
