import React from 'react';


class GalleryListItem extends React.Component {

    state = {
        imageClicked: false
    }
//  Function to change the image from false to true and back again. 
    handleClick = () => {
        this.setState({
            imageClicked: !this.state.imageClicked
        })
    }

    render() {
        console.log(this.state);
        let photoToChange;
        // conditional to change image to description 
        if (this.state.imageClicked) {
            photoToChange = 
                <div className= "descriptionChange">
                <p className = "description" onClick={this.handleClick}> {this.props.image.description} </p>
                <p> {this.props.image.likes} Baconians liked this!</p>
                <p> <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button></p>
                </div >

               
        }
        else {
            photoToChange = 
                <div className= "imageChange">
                <p onClick={this.handleClick} ><img className="lifeImages" src={this.props.image.path} alt="my gallery"/></p>
                <p>{this.props.image.likes} Baconians liked this!</p>
                <p> <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button> </p> 
                </div>
        }
        return (
            photoToChange
        )
    }
}

export default GalleryListItem;