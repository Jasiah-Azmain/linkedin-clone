import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Avatar } from "@material-ui/core";
import "./Feed.css";
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const renderAvatar = (Avatar, src) => <Avatar src={src}></Avatar>;

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          {renderAvatar(Avatar, user.photoUrl)}{" "}
          <div className="createIcon">
            <CreateIcon />
          </div>
          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* input options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoURL, timestamp },
          }) => (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
