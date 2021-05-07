import React, { useState, useEffect } from 'react';
import Images from './components/Images';
import Header from './components/Header';
import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  const fetchImages = () => {
    let url = '';
    if (query !== '') {
      url = `/api/search/photos?query=${query}&page=${page}&perPage=${perPage}`;
    } else {
      url = `/api/photos?page=${page}&perPage=${perPage}`;
    }
    if (page <= 1) {
      axios
        .get(url)
        .then(res => {
          setImages(res.data);
          setPage(2);
          setPerPage(10);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(url)
        .then(res => {
          setImages(images.concat(res.data));
          setPage(page + 1);
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  const onSearchChange = e => {
    setQuery(e.target.value);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="App">
      <div className="container is-fullhd">
        <Header onSearch={onSearchChange} />
        <InfiniteScroll
          dataLength={images.length}
          next={() => fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <Images images={images} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
