import cors from 'cors';
import express from 'express';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import path, { dirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});




const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
