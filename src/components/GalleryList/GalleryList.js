import React from 'react';

class GalleryList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.imageList.map((image) => {
                    return (
                        <div key={image.id}>
                        <ol> <img src={image.path}/> </ol>
                        <ol>{image.description}</ol>
                        <ol >{image.likes}</ol>
                        </div>
                   )
                })}
            </ul>
        )
    }
}
export default GalleryList; 