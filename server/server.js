require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('dev'));
app.use(express.json());

// get all restaurants
app.get('/restaurants', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurants: 'Mcdonalds',
    },
  });
});

// Get specific restaurant
app.get('/restaurants/:id', (req, res) => {
  console.log(req);
  res.status(200).json({
    status: 'success',
    data: {
      restaurants: 'Mcdonalds',
    },
  });
});

// create a restaurant
app.post('/restaurants', (req, res) => {
  console.log(req);
  res.status(201).json({
    status: 'success',
    data: {
      restaurants: 'Mcdonalds',
    },
  });
});

// update restaurant
app.put('/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      restaurants: 'Mcdonalds',
    },
  });
});

// delete restaurant
app.delete('/restaurants/:id', (req,res)=>{
  res.status(204).json({
    status: 'deleted',
  })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
