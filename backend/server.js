/*//import admin, { initializeApp } from 'firebase-admin';
import { config } from 'dotenv';
import express from 'express';
//import passport from 'passport';
//import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
//import { tokenCallback } from './helpers/token';

import { itemRouter } from './routers/item';
import { userRouter } from './routers/user';

// Load .env and create server
config();
let server = express();

// Initialize firebase

// Load middleware
server.use(express.json({
	limit: '50mb',
}));

// Setup passport
let strategy = new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SERVER_SECRET,
}, tokenCallback);
passport.use(strategy);
server.use(passport.initialize());

// Load routers
server.use('/api/user', userRouter);
server.use('/api/item', itemRouter);

// Export the server
export { server };*/