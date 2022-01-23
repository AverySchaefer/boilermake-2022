import { Router } from 'express';
import { User } from '../models/user';

const userRouter = Router();

//POST a new user
itemRouter.post('/user', async (req, res) => {
    let { user, name, user_id, rating, num_ratings, profile_picture, purchase_history, listing_history} = req.body;

    if (!user) {
        res.status(400).send({ msg: 'User data must be provided.' });
		return;
    }

    let userID;
    try {
        let userDocument = await new User(user).save();

		userID = userDocument.id;
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'Internal server error when saving user document.' });
		return;
    }

    res.status(200).send({
		userID,
		msg: 'New user successfully created.',
	});
});

//get items by ID
itemRouter.get('/:userID', async (req, res) => {
    let { userID } = req.params;
    if (!userID) {
        res.status(400).send({ msg: 'A user ID must be provided.' });
		return;
    }

    let user;
    try {
        user = await User.findById(userID).exec();
    } catch (error) {
        console.error(e);
		res.status(500).send({ msg: 'Internal server error.' });
		return;
    }

    if (!user) {
		res.status(400).send({ msg: 'No such user exists.' });
		return;
	}

    res.status(200).send({ user });
});

export { userRouter };