const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const URI = 'mongodb://127.0.0.1/mern-tasks'

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;