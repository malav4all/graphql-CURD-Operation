const mongoose = require('mongoose');
const dbOptions = {
    useNewUrlParser : true,
    poolSize:process.env.poolSize
}
const connection = mongoose.connect('mongodb://localhost:27017/graph',dbOptions)
console.log('dbConnected')

module.exports = connection;