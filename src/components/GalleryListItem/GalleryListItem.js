import React from 'react';


class GalleryListItem extends React.Component{

    render(){
        return(
            <div>
                <img src={this.props.image.path} /> 
                <button onClick={()=>this.props.likes(this.props.image.likes)}> LIKE</button>
                {this.props.image.description}
                {this.props.image.likes}
            </div>
        )
    }
}

export default GalleryListItem;