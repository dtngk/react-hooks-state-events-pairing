import React, {useState} from "react";
import CommentStats from "./CommentStats";

function Comment({comment, deleteComment}){

    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    
    function handleUpVoteClick(){
        setUpVote([parseInt(upVote) + 1]);
    }

    function handleDownVoteClick(){
        setDownVote([parseInt(downVote) + 1]);
    }

    return(  
        <div>
            <strong>{comment.user}</strong>
            <CommentStats 
                upVoteClick={handleUpVoteClick} 
                downVoteClick={handleDownVoteClick}
                upVote={upVote} 
                downVote={downVote} 
            />
            <p>{comment.comment}</p>
            <button onClick={() => deleteComment(comment)}>Remove Comment</button>
            <p></p>
        </div>
        
    )
}

export default Comment;