import React from 'react';


class GalleryListItem extends React.Component {

    state = {
        imageClick: false
    }

    handleClick = () => {
        console.log('CLICKED');
        this.setState({
            imageClick: !this.props.imageClick
        })
    }


    render() {
        console.log(this.state);
        let photoToChange;
        if (this.state.imageClick) {
            photoToChange = (
                <div>
                    <ol onClick={this.handleClick}><img src={this.props.image.path} /></ol>
                    <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button>
                    {this.props.image.likes}
                </div>
            )
        }
        else {
            photoToChange = (
                <div>
                    <ol onClick={this.handleClick}> {this.props.image.description}</ol>
                    <button onClick={() => this.props.likes(this.props.image.id)}> LIKE</button>
                    {this.props.image.likes}
                </div >
            )
        }
        return (
            photoToChange
        )
    }
}

export default GalleryListItem;