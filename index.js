const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

app.use(cors());

app.get('/api/test', (req, res) => {
    res.json({msg: 'Hi there!'})
});

app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
});
