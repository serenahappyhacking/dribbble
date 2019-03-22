import React, { Component } from "react";
import MenuTab from "./MenuTab/MenuTab";
import Content from "./Content/Content";
import { connect } from "react-redux";
import { fetchMainDribbles } from "../../redux/action";
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    this.props.onFetchDribbbles();
    console.log(this.props.content);
    console.log(this.props.optionsAreShow);
  }

  render() {
    return (
      <div className="dribbble_main">
        <MenuTab optionsAreShow={this.props.optionsAreShow} />
        <Content
          content={this.props.content}
          optionsAreShow={this.props.optionsAreShow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.main.content,
    optionsAreShow: state.main.optionsAreShow
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
