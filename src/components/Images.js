import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';
//import { ReactComponent as Loader } from '../loader.svg';
import Loader from './Loader';

const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  useEffect(() => {
    const url = `/api/photos?page=${page}&per_page=${perPage}`;
    axios
      .get(url)
      .then(res => setImages(res.data))
      .finally(setPage(2));
  }, []);

  const loadMore = () => {
    setPage(page + 1);
    axios
      .get(`/api/photos?page=${page}&per_page=${perPage}`)
      .then(res => setImages(images.concat(res.data)));
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={loadMore}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="image-grid">
          {images.map(image => (
            <Image image={image} key={image.id} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Images;
