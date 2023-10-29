import React from "react"
import { connect } from "react-redux"
import { add } from "../../Store/State/common"
import { withRouter } from "../../Utils/index"
import { Button } from "antd"
import { SetRoute } from "../../"
const mapStateToProps = (state) => {
  return {
    state,
  }
}

class LoginView extends React.Component {

  login = () => {
    const a = [1, 2, 3]

    //SetRoute(a);
    window.sessionStorage.setItem(
      "routers",
      window.btoa(window.encodeURIComponent(JSON.stringify(a))) //随便加个密
    )
    this.props.navigate("/home/welcome", { replace: true })
  };
  cmcc = () => {
    this.props.dispatch(add(1))
  };
  render() {
    const { state } = this.props
    return (
      <div className="login">
        <Button type="primary" onClick={this.login}>
          登录{state.commondata.n}
        </Button>

        <Button type="primary" onClick={this.cmcc}>
          add
        </Button>
      </div>
    )
  }
}
//react-redux提供一个connect高阶组件帮助类i组件拿到state和调用dispatch
export default withRouter(connect(mapStateToProps)(LoginView))
