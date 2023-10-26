import React from "react"
import { SetRoute } from "../../Router"
import {connect} from "react-redux"



const mapStateToProps = state => {
  return {
      myValue: state.n,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      changeInput(e){
          const action = {
              type: 'routesdata',
              value: e.target.value,
          };
          dispatch(action);
      }
  };
};
class LoginView extends React.Component {





  setroute() {

    SetRoute([1])
  }

  render() {

    const { counter } = this.props;
    return (
      <div className='login'>
        <button onClick={this.setroute}>添加路由进去{counter}</button>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginView)
