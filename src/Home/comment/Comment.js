import React,{Fragment} from 'react';
import CommentSlider from './CommentSlider';
import './Comment.scss';

const Comment = () => {
    
    return (
        <Fragment>
            <div className='commentBox container mt-5'>
                <div className='commentBox_title'>
                    <h3>Comment</h3>
                </div>
                <div className='commentBox_slider mt-4'>
                    <CommentSlider />
                </div>
            </div>
        </Fragment>
    );
}

export default Comment;