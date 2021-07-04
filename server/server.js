require('dotenv').config();
const express = require('express');

const app = express();

app.get('/restaurants', (req, res) => {
  res.status(202).json({
    status: 'success',
    restaurant: 'Mcdonalds',
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
