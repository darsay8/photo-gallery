import React, {Component} from 'react';
import './App.css';
import Images from './components/Images'

class App extends Component {

    render() {
        return (
            <div className="App">

                <div className="hero-body">
                    <div className="container">
                        <div className="header content">
                            <h2 className="subtitle is-4">The most awesome photos around the world</h2>
                            <h1 className="title is-1">
                                Beautiful Images <span role="img" aria-label="camera">📸</span>
                            </h1>
                        </div>
                        <Images/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
