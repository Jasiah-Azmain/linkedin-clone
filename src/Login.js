import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const logInToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) =>
      dispatch(
        login({
          uid: userAuth.user.uid,
          email: userAuth.user.email,
          name: userAuth.user.displayName,
          profilePic: userAuth.user.photoURL,
        })
      )
    );
  };

  const register = () => {
    if (!name) return alert("Please enter full name");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() =>
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                profilePic: userAuth.user.photoURL,
              })
            )
          );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilepic(e.target.value)}
          placeholder="Profile Picture URL"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={logInToApp}>
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
