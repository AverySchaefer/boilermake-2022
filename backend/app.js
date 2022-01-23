import { Router } from 'express';
import express  from 'express';
import mongoose from 'mongoose';
//const path = require('path');
//const cors = require('cors');
import { itemRouter } from './routes/item';
import { userRouter } from './routes/user';

require('dotenv').config();

let app = express();

console.log('cleared imports');

/*app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', adminRoute);*/
app.use('/api/items', itemRouter);
app.use('/api/users', userRouter)

const port = process.env.PORT || 8080;

mongoose
    .connect(process.env.DB_HOST, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        app.listen(port, () => console.log(`⚡️ Server and 🔌 Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });