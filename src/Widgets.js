import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "REACTJS is fun",
        "Learn the BASICS! Then you can show your ideas in the web"
      )}
      {newsArticle(
        "CORONA Virus UPDATE in Bangladesh",
        "Top news - 1800 reads"
      )}
      {newsArticle("HTML/CSS cheatsheets", "Top news - 1400 reads")}
    </div>
  );
}

export default Widgets;
