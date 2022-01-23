const Item = require('../models/item');

const itemRouter = Router();

itemRouter.post('/item', async (req, res) => {
    let { item, name, user_id, rating, num_ratings, profile_picture, purchase_history, listing_history} = req.body;

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