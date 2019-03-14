import React, { Component } from "react";
import MenuTab from "./MenuTab/MenuTab";
import Content from "./Content/Content";
import { connect } from "react-redux";
import { fetchMainDribbles } from "../../redux/action";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.onFetchDribbbles();
  }

  render() {
    return (
      <div className="dribbble_main">
        <MenuTab />
        <Content content={this.props.content} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.main.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDribbbles: () => {
      dispatch(fetchMainDribbles());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
