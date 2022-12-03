import express from 'express';
import './config/dbConfig.js';
import routes from './routes/routes.js'

const PORT = process.env.SERVER_PORT || 3000;

const app = express();


// Middlewares
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`It's working on port: ${PORT} !`));