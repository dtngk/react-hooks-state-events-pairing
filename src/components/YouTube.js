import React, {useState} from "react";
import Comment from "./Comment";

function YouTube({video}){

    const [comments, setComments] = useState(video.comments)
    const [showComments, setShowComments] = useState(true);
    const [likes, setLikes] = useState(parseInt(video.upvotes));
    const [dislikes, setDislikes] = useState(video.downvotes);
    
    function handleShowCommentsClick(){
        setShowComments((showComments => !showComments));
    }

    function handleDislikesClick(){
        setDislikes([parseInt(dislikes) + 1]);
    }

    function handleLikesClick(){
        setLikes([parseInt(likes) + 1]);
    }
    
    function deleteComment(comment){
        console.log(comment);
        setComments(comments.filter((ele) => (comment.id !== ele.id)));
    }

    const displayComments = comments.map(comment => (
        <Comment 
            key={comment.id} 
            comment={comment} 
            deleteComment={deleteComment}
        />
    ))

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} views | {video.createdAt}</p>
            <button onClick={handleLikesClick}>{likes} 👍</button>
            <button onClick={handleDislikesClick}>{dislikes} 👎</button>
            <p />
            <button onClick={handleShowCommentsClick}>{(showComments) ? "Hide Comments" : "Show Comments"}</button>
            {(showComments) ? <h3>{displayComments.length} Comments!</h3> : null}
            {(showComments) ? displayComments: null}
        </div>
    );
}

export default YouTube;