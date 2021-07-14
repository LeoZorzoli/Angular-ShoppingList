const router = require('express').Router();
const Item = require('../models/item');

router.get('/', async (request, response) => {
    const items = await Item.find({})
    response.json(items);
});

router.delete('/:id', async (request, response) => {
    const item = await Item.findById(request.params.id);

    await item.remove();

    response.status(204).end()
})

router.post('/', async (request, response) => {
    const body = request.body;

    const item = new Item({
        title: body.title,
        price: body.price,
        quantity: body.quantity,
        completed: false
    });

    const savedItem = await item.save();
    response.status(201).json(savedItem.toJSON());
})

module.exports = router;