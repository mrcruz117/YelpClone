require('dotenv').config();
const express = require('express');

const app = express();

// get all restaurants
app.get('/restaurants', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurants: 'Mcdonalds',
    }
  });
});

// Get specific restaurant
app.get('/restaurants/:id',(req,res)=>{
  console.log(req);
});

// create a restaurant
app.post('/restaurants', (req, res) => {
  console.log(req)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
