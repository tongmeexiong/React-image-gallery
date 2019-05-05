import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList'
import Profile from '../profile/profile'
import SecondTitle from '../Second.Title.js/SecondTitle'


class App extends Component {

// 1 Life cycle for functions to run once. If on render it will loop. 
componentDidMount(){
  this.getPhoto();
  this.getProfile();
}

// Empty arrays we will be sending our data to from our database. Made one for my gallery images and one of myself. 
  state = {
    image: [],
    profile: []
  }

//  GET request to talk to our server for information. In this case we will need it from the gallery. 
  getPhoto = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        this.setState({ // Changing the state to what I want to be passed in. 
          image: response.data
        })
      }).catch((err) => {
        console.log('Error in GET', err);
      })
  }

  //  GET request to talk to our server for information. In this case we will need it from the gallery/profile I made to retrieve my profile pic. 
  getProfile = () => {
    axios.get('/gallery/profile')
      .then((response) => {
        console.log(response.data);
        this.setState({
          profile: response.data
        })
      }).catch((err) => {
        console.log('Error in GET', err);
      })
  }

// This Function will send a PUT to the Server side to change our data in the database. 
  clickedLikeButton = (id) => { // pass id to know which data we are talking to specifically. 
    console.log('I clicked like Button', id); //ALWAYS TEST YOUR STUFF!
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((response) => {
      console.log('response from PUT request:', response.data);
      this.getPhoto(); // Will refresh DOM with the information we changed in the database from the PUT. 
    }).catch((error) => {
      console.log('error in PUT request:', error);
    });
  }


  render() {
    console.log(this.state.profile); //ALWAYS TEST YOUR STUFF!
    console.log(this.state.image);//ALWAYS TEST YOUR STUFF!
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">“Live in the sunshine, swim the sea, drink the wild air.” – Ralph Waldo Emerson</h1>
        </header>
        <Profile profilePicture={this.state.profile} /> {/* My profile picture. Componented and props with profilePicture */}
        <SecondTitle />{/* Just another header title. Componented to another file*/}
        <hr></hr>
        {/* Making gallerylist component and also a component to pass in function to handle the click event */}
       <GalleryList imageList={this.state.image}
          buttonLikes={this.clickedLikeButton}/> 
      </div>
    );
  }
}

export default App;
