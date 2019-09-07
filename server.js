const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ message: 'Hello from server' }));

app.use('/api/user', require('./routes/User'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
