import { Router } from 'express';
import { User } from '../models/user';
import { itemRouter } from './item';

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

//Log in to an existing user's account
itemRouter.post('/login', async (req, res) => {
	let { email, password } = req.body;

	if (!password || !email) {
		res.status(400).send({ msg: 'Password and email must be provided.' });
		return;
	}

    let user;
    let userID;
	try {
		user = await User.findOne({ email }).exec();
        userID = user._id;

		// Reject if user does not exist
		if (!user) {
			res.status(400).send({ msg: 'No user with email exists.' });
			return;
		}
	} catch (e) {
		// Handle internal server errors
		console.error(e);
		res.status(500).send({ msg: 'An error occurred when fetching user.' });
		return;
	}

    try {
		if (password != user.password) {
			res.status(400).send({ msg: 'Invalid password.' });
			return;
		}
	} catch (e) {
		console.error(e);
		res.status(500).send({ msg: 'An error occurred when comparing password.' });
		return;
	}

    res.status(200).send({
		userID,
		msg: 'Successfully logged in.',
	});
});

export { userRouter };