import React from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem'

class GalleryList extends React.Component {
    render() {
        return (
            <ul>
                {/* Making loop to loop through the imageList. This is props from the app.js of the empty array where we sent info */}
                {this.props.imageList.map((image) => {
                    return (
                            <GalleryListItem key={image.id} image={image} likes={this.props.buttonLikes}/>
                            // Make another component to send list items and button.
                   )
                })}
            </ul>
        )
    }
}
export default GalleryList; 