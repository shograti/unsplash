const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const database = require('./database/database.js');
const PORT = process.env.PORT || 3315;
const morgan = require('morgan');

const Images = require('./models/Images.js');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(morgan('dev'));

app.get('/images', async (req, res) => {
  if (req.query.label) {
    console.log(req.query.label);
    const images = await Images.find({ label: { $regex: req.query.label } });
    if (images) {
      res.status(200).json(images);
    }
  } else {
    const images = await Images.find();
    if (images) {
      res.status(200).json(images);
    }
  }
});

app.post('/images', (req, res) => {
  const { label, imageUrl } = req.body;
  const image = new Images({
    label: label,
    image: imageUrl,
  });
  image.save();
  res.status(200).json(image);
});

app.delete('/images/:id', async (req, res) => {
  const id = req.params.id
  await Images.deleteOne({ _id: id });
  res.status(200).json();
});

app.listen(3315, () => {
  console.log('App is running on port ' + PORT);
});
