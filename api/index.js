//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IMPORTS
const fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').createApi;
const express = require('express');
const cors = require('cors');

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UNSPLASH API
const unsplash = new Unsplash({
  accessKey: config.get('UNSPLASH_ACCESS_KEY'),
  fetch: fetch,
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXPRESS
const app = express();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MIDDLEWARE
app.use(cors());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GET PHOTOS
app.get('/api/photos/', (req, res) => {
  const q = req.query;
  unsplash.photos
    .list({ page: q.page, perPage: q.perPage })
    .then(photos => {
      return res.json(photos.response.results);
    })
    .catch(err => {
      console.error('Error: ', err.message);
      //return res.sendStatus(501);
    });
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SEARCH PHOTOS
app.get('/api/search/photos/', (req, res) => {
  const q = req.query;
  unsplash.search
    .getPhotos({
      query: q.query,
      page: q.page,
      perPage: q.perPage,
      orderBy: 'latest',
    })
    .then(photos => {
      return res.json(photos.response.results);
    })
    .catch(err => {
      console.log('Error: ', err.message);
      //return res.sendStatus(501);
    });
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PORT CONFIG
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
