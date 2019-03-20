//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IMPORTS
global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const cors = require('cors');

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UNSPLASH API
const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXPRESS
const app = express();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MIDDLEWARE
app.use(cors());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GET PHOTOS
app.get('/api/photos/', (req, res) => {
    unsplash.photos
        .listPhotos(req.query.start, req.query.count)
        .then(toJson)
        .then(photos => {
            return res.json(photos)
        })
});

app.get('/api/search/photos/', (req, res) => {
    unsplash.photos
        .searchPhotos(req.query.searchField)
        .then(toJson)
        .then(photos => {
            return res.json(photos)
        });

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PORT CONFIG
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`));