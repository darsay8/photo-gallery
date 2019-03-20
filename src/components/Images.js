import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image';

class Images extends Component {

    state = {
        images: [],
        categories: [],
        start: 1,
        count: 30,
    };

    componentDidMount() {
        const {count, start} = this.state;
        axios
            .get(`/api/photos?count=${count}&start=${start}`)
            .then(res => this.setState({images: res.data}));
    }

    render() {

        return (
            <div>
                <div className="image-grid">
                    {
                        this.state.images.map((image) => (
                            <Image
                                image={image}
                                key={image.id}
                            />

                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Images;