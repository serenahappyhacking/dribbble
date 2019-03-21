import React, { Component } from "react";
import "./Tooltip.css";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipIsShow: "none"
    };
  }

  handleShowTooltip = () => {
    this.setState({
      tooltipIsShow: "block"
    });
  };

  handleHideTooltip = () => {
    this.setState({
      tooltipIsShow: "none"
    });
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="tooltip">
        <div
          className="tooltip_open"
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
        >
          {children}
        </div>
        <div
          className="tooltip_inner"
          style={{ display: this.state.tooltipIsShow }}
        >
          <div className="tooltip_arrow" />
          <div className="tooltip_content">
            <span>{title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
