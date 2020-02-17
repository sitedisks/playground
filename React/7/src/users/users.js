import React, { Component } from 'react';
import User from './user';

class Users extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const param = 1000;
        return (
            <div>
                <h1>{this.props.title} List</h1>
                <User pp={param}>Peter</User>
            </div>
        )
    }

}

export default Users;