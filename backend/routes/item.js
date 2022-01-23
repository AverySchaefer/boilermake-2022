const Item = require('../models/item');

const itemRouter = Router();

//POST a new item
itemRouter.post('/item', async (req, res) => {
    let { item, item_id, name, price, seller_id, description, images, tag} = req.body;

    if (!item) {
        res.status(400).send({ msg: 'Item data must be provided.' });
		return;
    }

    let itemID;
    try {
        let itemDocument = await new Item(item).save();

		itemID = itemDocument.id;
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'Internal server error when saving item document.' });
		return;
    }

    res.status(200).send({
		eventID,
		msg: 'New item listing successfully created.',
	});
});

//get items by ID
itemRouter.get('/:itemID', async (req, res) => {
    let { itemID} = req.params;
    if (!itemID) {
        res.status(400).send({ msg: 'An item ID must be provided.' });
		return;
    }

    if (itemID == 'all') return getAllItems(req, res);

    let item;
    try {
        item = await Item.findById(itemID).exec();
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'Internal server error.' });
		return;
    }

    if (!item) {
		res.status(400).send({ msg: 'No such item exists.' });
		return;
	}

    res.status(200).send({ item });
});

//Get all items
const getAllItems = async (req, res) => {
	let items = [];
	try {
		items = await Item
			.find().exec();

	} catch (e) {
		console.error(e);
		res.status(500).send({ msg: 'An internal server error occurred.' });
		return;
	}

	res.status(200).send({ items: items });
};

//Get items under a given price
itemRouter.get('/price', async (req, res) => {
    let { maxPrice } = req.body;   
    if (!maxPrice) {
        res.status(400).send({ msg: 'A max price must be provided.' });
		return;
    }

    let items = [];
    try {
        items = await Item.find({price: {$lt: maxPrice}}).exec();
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'An internal server error occurred.' });
		return;
    }

    if (!items) {
		res.status(400).send({ msg: 'No such item exists.' });
		return;
	}

    res.status(200).send({ items: items });
});

//Get items with a specific tag
itemRouter.get('/tag', async (req, res) => {
    let { tag } = req.body;   
    if (!tag) {
        res.status(400).send({ msg: 'A tag must be provided.' });
		return;
    }

    let items = [];
    try {
        items = await Item.find({tag: tag}).exec();
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'An internal server error occurred.' });
		return;
    }

    if (!items) {
		res.status(400).send({ msg: 'No such item exists.' });
		return;
	}

    res.status(200).send({ items: items });
});