import React, { Component } from "react";
import "./SmallInfo.css";

class SmallInfo extends Component {
  render() {
    const { content } = this.props;
    if (content.length > 0) {
      return (
        <ul className="small_info">
          {content.map((item, index) => (
            <li className="each_item" key={index}>
              <div className="display_imgs">
                <div className="img">
                  <img src={item.src} alt="main img is loading..." />
                </div>
                <div className="info">
                  <div className="tools">
                    <div className="view">
                      <span>{item.viewCount}</span>
                    </div>
                    <div className="comment">
                      <span>{item.commentCount}</span>
                    </div>
                    <div className="favo">
                      <span>{item.favoCount}</span>
                    </div>
                  </div>
                  <div className="actions">
                    <button>Save</button>
                    <button>Like</button>
                  </div>
                </div>
              </div>
              <div className="hover_card">
                <a href="/">
                  <img src={item.nameIcon} alt="" />
                  <span>{item.author}</span>
                </a>
                <a href="/">{item.team}</a>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return "";
    }
  }
}

export default SmallInfo;
