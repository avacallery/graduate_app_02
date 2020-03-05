const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express(); 
require('dotenv/config');
const bodyParser = require('body-parser'); 
const cors = require('cors'); //cors allows frontend to talk to backend. when you send data from your backend, it will appear in your frontend
const grads = require('./routes/api/grads'); 

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Cannot connect to MongoDB.'));

app.use(express.json()); 
app.use('/api/grads', grads);
app.use(express.static('public')); 
app.use(cors()); 

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
}); 