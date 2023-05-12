const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB


mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-api', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;






















































// mongoose.connect('mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority');
