import React from 'react';

class NameLabel extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <p>this is belonging to {this.props.name}</p>
                <p>made by {this.props.title}</p>
            </div>
        );
    }
}

export default NameLabel;