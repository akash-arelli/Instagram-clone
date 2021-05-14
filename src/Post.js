import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({username , imageUrl , caption}) {
  return (
    <div className='post'>
      <div className="post_header">
        <Avatar
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDl6Gi7bJ9phwCl6QWaPriohSrufUM9MCHA&usqp=CAU"
          className="post_avatar"
        />
        <h3>{username} </h3>
      </div>
      {/*header -> Avatar + username*/}
      <img
        className="post_image"
        src={imageUrl} 
      />
      {/*Image */}
      <h4 className="post_text">
        <strong>{username }</strong> {caption}
      </h4>
      {/*User name + caption */}
    </div>
  );
}

export default Post;
