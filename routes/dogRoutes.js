const Dog = require('../models/Dog')

module.exports = (app) => {

    app.post('/api/dogs', async (req, res) => {
        const dog = new Dog(req.body);

        try {
            await dog.save();
            res.status(201).send(dog);
        } catch (e) {
            res.status(400).send(e);
        }
    });

    app.get('/api/dogs', async (req, res) => {
        try {
            const dogs = await Dog.find({});
            res.send(dogs);
        } catch (e) {
            res.status(500).send();
        }
    });

    app.get('/api/dogs/:id', async (req, res) => {
        const _id = req.params.id;

        const isValidId = _id.match(/[0-9A-Fa-f]{24}/);
        if (isValidId === null) {
            return res.status(400).send('Request ID invalid!');
        }

        try {
            const dog = await Dog.findById(_id);

            if (!dog) {
                return res.status(404).send();
            }

            res.send(dog);
        } catch (e) {
            res.status(500).send();
        }
    });

    app.patch('/api/dogs/:id', async (req, res) => {
        const updates = Object.keys(req.body);
        const updatesPermitted = ['name', 'breed', 'age', 'listVaccines'];
        const isValidOperation = updates.every((update) => updatesPermitted.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid Updates' });
        }

        try {
            const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

            if (!dog) {
                return res.status(404).send();
            }

            res.send(dog);
        } catch (e) {
            res.status(400).send(e);
        }
    });

    app.delete('/api/dogs/:id', async (req, res) => {
        try {
            const dog = await Dog.findByIdAndDelete(req.params.id);

            if (!dog) {
                return res.status(404).send();
            }

            res.send(dog);
        } catch (e) {
            res.status(500).send();
        }
    });

}