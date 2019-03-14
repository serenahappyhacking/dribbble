import React, { Component } from "react";
import "./Content.css";
import SmallInfo from "./SmallInfo/SmallInfo";

class Content extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="dribbbles">
        <h2>
          You aren’t following anyone yet. Here are some popular shots instead.
        </h2>
        <p>
          <a href="/designers/friends">Frind friends</a>
          you already know from Twitter or Facebook.
        </p>
        <SmallInfo content={content} />
      </div>
    );
  }
}

export default Content;
