import React, { Component } from "react";
import MenuTab from "./MenuTab/MenuTab";
import Content from "./Content/Content";
import { connect } from "react-redux";
import { fetchMainDribbles, changeLayout } from "../../redux/action";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.onFetchDribbbles();
  }

  render() {
    return (
      <div className="dribbble_main">
        <MenuTab
          selectedLayout={this.props.selectedLayout}
          onChangeLayout={this.props.onChangeLayout}
        />
        <Content
          content={this.props.content}
          selectedLayout={this.props.selectedLayout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.main.content,
    selectedLayout: state.main.selectedLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDribbbles: () => {
      dispatch(fetchMainDribbles());
    },
    onChangeLayout: layout => {
      dispatch(changeLayout(layout));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
