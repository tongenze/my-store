import React from "react"
import { Outlet } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from "../../Utils/index"
import { GetRoutesArr, mateMenu } from "../../Router"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Button } from "antd"
const { Header, Sider, Content } = Layout
const mapStateToProps = (state) => {
  return {
    state,
  }
}
//匹配菜单栏
class HomeView extends React.Component {
  componentDidMount() {
    let arr = GetRoutesArr()
    let menuData = this.props.state.menudata.menuData
    this.setState({
      menuData: mateMenu(arr, menuData)
    })

    console.log(this)
  }

  state = {
    collapsed: false,
    colorBgContainer: this.props.usetoken.token.colorBgContainer,
    menuData: [],
  };

  logout = () => {
    window.sessionStorage.removeItem("routers")
    this.props.navigate("/login")
  };
  menuClick = (item) => {
    this.props.navigate("/home/content" + item.key)

  }
  render() {
    const { collapsed, colorBgContainer, menuData } = this.state
    return (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuData}
            onClick={this.menuClick}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                this.setState({
                  collapsed: !collapsed,
                })
              }}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Button type="primary" onClick={this.logout}>
              退出
            </Button>
          </Header>
          <Content
            style={{
              margin: "16px 12px",
              padding: 16,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />

          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(connect(mapStateToProps)(HomeView))
