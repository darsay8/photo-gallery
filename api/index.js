//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IMPORTS
//global.fetch = require('node-fetch');
const fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').createApi;
// import { createApi } from 'unsplash-js';
const toJson = require('unsplash-js').toJson;
const express = require('express');
const cors = require('cors');

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UNSPLASH API
const unsplash = new Unsplash({
  accessKey: config.get('ACCESS'),
  fetch: fetch,
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXPRESS
const app = express();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MIDDLEWARE
app.use(cors());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GET PHOTOS
app.get('/api/photos/', (req, res) => {
  console.log(req.query.per_page);
  unsplash.photos
    .list({ page: req.query.page, per_page: req.query.per_page })
    .then(toJson)
    .then(photos => {
      //console.log(photos.response.results);
      return res.json(photos.response.results);
    });
});

app.get('/api/search/photos/', (req, res) => {
  unsplash.photos
    .searchPhotos(req.query.searchField)
    .then(toJson)
    .then(photos => {
      return res.json(photos);
    });
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PORT CONFIG
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
