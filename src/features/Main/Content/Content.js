import React, { Component } from "react";
import "./Content.css";
import SmallInfo from "./SmallInfo/SmallInfo";
import LargeInfo from "./LargeInfo/LargeInfo";

function Dribbles(content, optionsAreShow) {
  if (content && optionsAreShow.smallInfoIsShow) {
    console.log(optionsAreShow);
    return <SmallInfo content={content} />;
  } else if (content && optionsAreShow.largeInfoIsShow) {
    return <LargeInfo content={content} />;
    // } else if (optionsAreShow.smallNoInfoIsShow === true) {
    // return <SmallNoInfo content={content} />;
  } else {
    // return <LargeNoInfo content={content} />;
    return "";
  }
}

class Content extends Component {
  render() {
    // console.log(this.props);
    const { content, optionsAreShow } = this.props;
    return (
      <div className="dribbbles">
        <h2>
          You aren’t following anyone yet. Here are some popular shots instead.
        </h2>
        <p>
          <a href="/designers/friends">Frind friends</a>
          you already know from Twitter or Facebook.
        </p>
        <Dribbles content={content} optionsAreShow={optionsAreShow} />
      </div>
    );
  }
}

export default Content;
