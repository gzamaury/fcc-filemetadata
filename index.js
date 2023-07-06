import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import fileanalyse from './routes/fileanalyse.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/api/fileanalyse', fileanalyse);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
