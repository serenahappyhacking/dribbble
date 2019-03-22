import React, { Component } from "react";
import "./Content.css";
import SmallInfo from "./SmallInfo/SmallInfo";
import LargeInfo from "./LargeInfo/LargeInfo";
import {
  SMALL_INFO_SELECTED,
  LARGE_INFO_SELECTED
} from "../../../constants/layoutConst";

const Dribbles = ({ content, selectedLayout }) => {
  if (content.length === 0) return null;

  switch (selectedLayout) {
    case SMALL_INFO_SELECTED:
      return <SmallInfo content={content} />;
    case LARGE_INFO_SELECTED:
      return <LargeInfo content={content} />;
    default:
      return null;
  }
};

class Content extends Component {
  render() {
    const { content, selectedLayout } = this.props;
    return (
      <div className="dribbbles">
        <h2>
          You aren’t following anyone yet. Here are some popular shots instead.
        </h2>
        <p>
          <a href="/designers/friends">Frind friends</a>
          you already know from Twitter or Facebook.
        </p>
        <Dribbles content={content} selectedLayout={selectedLayout} />
      </div>
    );
  }
}

export default Content;
