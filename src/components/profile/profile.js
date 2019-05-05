import React from 'react';

class profile extends React.Component {
    render() {
        return (
            <ul>
                
                {this.props.profilePicture.map((image) => {
                    return (
                        <p key={image.id}> <img src={image.path}/> </p>
                    )
                })}
            </ul>
        )
    }
}

export default profile; 