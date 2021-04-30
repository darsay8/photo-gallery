import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  useEffect(() => {
    const url = `/api/photos?page=${page}&per_page=${perPage}`;
    axios.get(url).then(res => setImages(res.data));
    setPage(2);
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
        loader={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt=""
          />
        }
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
