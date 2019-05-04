import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList'


class App extends Component {

componentDidMount(){
  this.getPhoto();
}
  state = {
    image: []
  }


  getPhoto = () => {
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

    // updatePhoto =()=>{
    //   axios.post('/gallery')
    //   .then((response)=>{
    //     console.log('in POST', response);
 
    //   }).catch((err)=>{
    //     console.log('POST', err);
    //   })
    // }


  clickedLikeButton = (id) => {
    console.log('I clicked like Button', id);
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((response) => {
      console.log('response from PUT request:', response.data);
      this.getPhoto();
    }).catch((error) => {
      console.log('error in PUT request:', error);
    });
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
        <GalleryList imageList={this.state.image}
          buttonLikes={this.clickedLikeButton}/>
      </div>
    );
  }
}

export default App;
