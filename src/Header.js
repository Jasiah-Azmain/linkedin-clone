import React from "react";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import WorkIcon from "@material-ui/icons/Work";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = (e) => {
    e.preventDefault();
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.svgrepo.com/show/303299/linkedin-icon-2-logo.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={CommentRoundedIcon} title="Messages" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        {user ? <HeaderOption avatar={true} title="me"></HeaderOption> : null}
        {user ? (
          <div onClick={logOutOfApp}>
            <HeaderOption Icon={ExitToAppIcon} title="Sign Out" />
          </div>
        ) : null}
        <HeaderOption Icon={AppsRoundedIcon} title="Work" />
      </div>
    </div>
  );
}

export default Header;
