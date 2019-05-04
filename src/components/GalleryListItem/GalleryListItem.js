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
                <ol onClick={this.handleClick}> {this.props.image.description}</ol>
                    <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button>
                    {this.props.image.likes}
                </div >
               
        }
        else {
            photoToChange = 
                <div>

                <ol><img onClick={this.handleClick} src={this.props.image.path} /></ol>
                    <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button>
                    {this.props.image.likes}
                </div>
            
        }
        return (
            photoToChange
        )
    }
}

export default GalleryListItem;