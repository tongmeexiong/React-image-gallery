import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {

componentDidMount(){
  this.addPhoto();
}
  state = {
    image: []
  }


  addPhoto = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        this.setState({
          image: response.data
        })
      }).catch((err) => {
        console.log('Error in GET', err);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
