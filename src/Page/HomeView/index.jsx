import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "antd";
import { connect } from "react-redux";
import { withRouter } from "../../Utils/index";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

class HomeView extends React.Component {
  logout = () => {
    this.props.navigate("/login");
    window.sessionStorage.removeItem("routes");
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.logout}>
          退出
        </Button>
        <Outlet />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(HomeView));
