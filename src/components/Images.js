import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

class Images extends Component {
  state = {
    images: [],
    categories: [],
    start: 1,
    count: 30
  };

  componentDidMount() {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    console.log("componentDidMount:" + count, start);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  loadMore = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    console.log("loadMore:" + count, start);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="image-grid">
            {this.state.images.map(image => (
              <Image image={image} key={image.id} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
