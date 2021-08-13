import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import { ThumbUpAltOutlined } from "@material-ui/icons";
import CommentIcon from "@material-ui/icons/Comment";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import InputOption from "./InputOption";
import "./Posts.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Posts = forwardRef(({ name, message, photoURL }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div ref={ref} className="posts">
      <div className="posts__header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="posts__info">
          <h2>{name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="posts__body">
        <p>{message}</p>
      </div>

      <div className="posts__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption
          Icon={ArrowRightAltRoundedIcon}
          title="Share"
          color="gray"
        />
        <InputOption Icon={SendRoundedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Posts;
