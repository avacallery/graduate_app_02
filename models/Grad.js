const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 
const GradSchema = new Schema ({
    name: {
        type: String, 
        required: true
    }, 
    role: {
        type: String, 
        required: true
    }, 
    company: {
        type: String, 
        required: true
    }, 
    yearOfGraduation: { 
        type: Date, 
        required: true
    }
}); 

module.exports = Grad = mongoose.model('Grad', GradSchema);
//'Grad' creates a database name inside of your collection using the GradSchema
//we are exporting the MODEL ... the instance of the SCHEMA