import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/database.js';
import sequelizeStore from 'connect-session-sequelize';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import authRoute from './routes/authRoute.js';
import fileUpload from 'express-fileupload';
dotenv.config();

const app = express();

const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
   db: db,
});
// (async () => {
//   await db.sync({ alter: true });;
// })();

app.use(
   session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      store: store,
      cookie: { secure: 'auto' },
   })
);

app.use(fileUpload());
app.use(express.static('public'));
app.use(
   cors({
      credentials: true,
      origin: 'http://localhost:3000',
   })
);
app.use(express.json());

app.use(userRoute);
app.use(productRoute);
app.use(categoryRoute);
app.use(authRoute);

// store.sync();
app.listen(process.env.APP_PORT, () => console.log('Running App'));
