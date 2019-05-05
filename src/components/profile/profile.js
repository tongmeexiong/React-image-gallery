import React from 'react';

class profile extends React.Component {
    render() {
        return (
            <ul>
                
                {this.props.profilePicture.map((image) => {
                    return (
                        <div key= { image.id } className= "userPicDiv">
                        <p > <img className="userPic" src={image.path}/> </p>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default profile; 