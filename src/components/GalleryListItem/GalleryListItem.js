import React from 'react';

class GalleryListItem extends React.Component{
    render(){
        return(
            <div>
                <ol> <img src={this.props.image.path} /> </ol>
                <ol onClick={this.props.like}><button>LIKE</button></ol>
                <ol>{this.props.image.description}</ol>
                <ol >{this.props.image.likes}</ol>
            </div>
        )
    }
}

export default GalleryListItem;