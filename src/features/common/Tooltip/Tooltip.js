import React, { Component } from "react";
import "./Tooltip.css";

class Tooltip extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="tooltip">
        <div className="tooltip_arrow" />
        <div className="tooltip_content">
          <span>{title}</span>
        </div>
      </div>
    );
  }
}

export default Tooltip;
