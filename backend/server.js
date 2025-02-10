const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Allow JSON data
app.use(express.urlencoded({ extended: true })); // Allow URL-encoded data

// Sample route
app.get('/', (req, res) => {
    res.send('Ride-Sharing Backend is Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const routes = require('./routes');
app.use('/api', routes);
