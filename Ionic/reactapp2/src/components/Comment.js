import React from 'react';
import { IonIcon } from '@ionic/react';
import './Comment.css';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="comment-box">
                <p className="comment-body">{this.props.body}</p>
                <div>
                    <span className="comment-author">
                        {this.props.username} @
               {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(this.props.createdAt))}
                    </span>
                    {this.props.username == localStorage.getItem("username") ? <span>
                        <IonIcon slot="end" name="trash"></IonIcon>
                    </span> : ''}
                </div>
            </div>
        )
    }
}
export default Comment;

