import React, { Component } from "react";
import "./SmallInfo.css";

class SmallInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: ""
    };
  }

  handleMouseEnter = index => {
    this.setState({
      isShow: index
    });
  };

  handleMouseLeave = index => {
    this.setState({
      isShow: ""
    });
  };

  render() {
    const { content } = this.props;
    const { isShow } = this.state;

    if (content.length > 0) {
      return (
        <ul className="small_info">
          {content.map((item, index) => (
            <li className="each_item" key={index}>
              <div
                className="display_imgs"
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={() => this.handleMouseLeave(index)}
              >
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
                  {isShow === index ? (
                    <div className="actions" style={{ opacity: 1 }}>
                      <button>Save</button>
                      <button>Like</button>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="hover_card">
                <a href="/">
                  <img src={item.nameIcon} alt="" />
                </a>
                <a href="/" className="author">
                  {item.author}
                </a>
                <a href="/" className="badge_link">
                  {item.team}
                </a>
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
