import React from 'react';


class GalleryListItem extends React.Component {

    state = {
        imageClicked: false
    }

    handleClick = () => {
        this.setState({
            imageClicked: !this.state.imageClicked
        })
    }

    render() {
        console.log(this.state);
        let photoToChange;
        if (this.state.imageClicked) {
            photoToChange = 
                <div>
                <p className = "description" onClick={this.handleClick}> {this.props.image.description} </p>
                <p> {this.props.image.likes}</p>
                <p> <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button></p>
                </div >
               
        }
        else {
            photoToChange = 
                <div>
                <p onClick={this.handleClick} ><img src={this.props.image.path} /></p>
                <p> <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button> </p> 
                <p>{this.props.image.likes}</p>
                </div>
        }
        return (
            photoToChange
        )
    }
}

export default GalleryListItem;