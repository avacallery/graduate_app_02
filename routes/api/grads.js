const express = require('express'); 
const router = express.Router(); 
const Grad = require('../../models/Grad'); // .. is going OUT of a folder 

router.get('/test', (req, res) => {
    res.json({msg: "Works"}); 
}); 

router.get('/', async (req, res) => {
    const grads = await Grad.find().sort('name');
    res.send(grads);
}); 

router.post('/', async (req, res) => {
    console.log(req.body); 
    let grad = new Grad({
        name: req.body.name, 
        role: req.body.role, 
        company: req.body.company, 
        yearOfGraduation: req.body.yearOfGraduation
    });
    try {
        console.log(grad); 
        const newGrad = await grad.save();
        res.status(201).json(newGrad); 
    } catch {
        res.status(400).json({ message: err.message }); 
    }
    // res.send(grad); 
})

router.delete('/:id', async (req, res) => {
    const Grad = await Grad.findByIdAndRemove(req.params.id, req.body);

    if (!graduate) return res.status(404).send('The graduate with the given ID was not found.')

    res.send(graduate);
})

module.exports = router; 