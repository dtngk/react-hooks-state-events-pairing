import React from "react";

function CommentStats({upVoteClick, downVoteClick, upVote, downVote}){

    return (
        <div>
            <button onClick={upVoteClick}>{upVote} 👍</button>
            <button onClick={downVoteClick}>{downVote} 👎</button>
        </div>
    )


}

export default CommentStats;