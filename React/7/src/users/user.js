import React from 'react';

const User = (props) => {
    let age = props.age ? props.age: 'N/A';
    
    return (
    <div>Name: {props.children} | Power: {props.pp}</div>
    )
}

function Comp(props) {

}

export default User;