import React, { Component } from "react";
import "./Main.css";
import MenuTab from "./MenuTab/MenuTab";
import Content from "./Content/Content";
import { connect } from "react-redux";
import { fetchMainDribbles, changeLayout } from "../../redux/action";

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
          bigContent={this.props.bigContent}
          selectedLayout={this.props.selectedLayout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.main.content,
    bigContent: state.main.bigContent,
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
