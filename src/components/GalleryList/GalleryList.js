import React from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem'

class GalleryList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.imageList.map((image) => {
                    return (
                        <GalleryListItem key={image.id} image={image}/>
                   )
                })}
            </ul>
        )
    }
}
export default GalleryList; 