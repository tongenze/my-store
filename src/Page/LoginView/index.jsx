import React from "react";
import { SetRoute } from "../../Router";
import { connect } from "react-redux";
import { add } from "../../Store/State/common";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

class LoginView extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  setroute() {
    SetRoute([1]);
  }

  cmcc = () => {
    this.props.dispatch(add(1));
  };
  render() {
    const { state } = this.props;
    return (
      <div className="login">
        <button onClick={this.setroute}>
          添加路由进去{state.commondata.n}
        </button>
        <button onClick={this.cmcc}>add</button>
      </div>
    );
  }
}
//react-redux提供一个connect高阶组件帮助类i组件拿到state和调用dispatch
export default connect(mapStateToProps)(LoginView);
