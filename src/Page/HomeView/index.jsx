import React from 'react'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter, deepClone } from '../../Utils/index'
import { GetRoutesArr, mateMenu } from '../../Router'
import { Layout, Menu, Button, Dropdown, Modal, Form, Input } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  UserOutlined,
  EditOutlined,
  VideoCameraOutlined,
  FundOutlined,
} from '@ant-design/icons'
import './home.css'
import { addTag, getsessionStorageData } from '../../Store/State/tagsdata'

//
const { Header, Sider, Content } = Layout
const mapStateToProps = (state) => {
  return {
    state,
  }
}
const items = [
  {
    key: '1',
    label: (
      <div>
        <EditOutlined />
        &nbsp; &nbsp; 修改密码
      </div>
    ),
  },
]
//匹配菜单栏
class HomeView extends React.Component {
  componentDidMount() {
    let arr = GetRoutesArr()
    let menuData = deepClone(this.props.state.menudata.menuData)
    menuData.forEach((i) => {
      switch (i.key) {
        case '1':
          i.icon = <UserOutlined />
          break
        case '2':
          i.icon = <VideoCameraOutlined />
          break
        case '3':
          i.icon = <FundOutlined />
          break

        default:
          break
      }
    })
    this.setState({
      menuData: mateMenu(arr, menuData),
    })
  }
  //状态
  state = {
    collapsed: false,
    colorBgContainer: this.props.usetoken.token.colorBgContainer,
    menuData: [],
    isModalOpen: false,
    form: this.props.useform[0],
  }
  //退出登录
  logout = () => {
    window.sessionStorage.removeItem('routers')
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('tagkey')
    this.props.dispatch(getsessionStorageData([])) //退出清空redux
    this.props.navigate('/login', { replace: true })
  }
  //菜单栏点击触发
  menuClick = (item, e) => {
    this.props.dispatch(
      addTag({
        key: item.key,
        label: item.domEvent.target.innerText,
        isactive: true,
      })
    )
    this.props.navigate('/home/content/' + item.key)
  }
  //用户下拉点击触发
  openxg = ({ key }) => {
    if (key === '1') {
      this.setState({
        isModalOpen: true,
      })
    }
  }
  //弹框确认 验证通过拿到表单的三个值values 做旧密码与后台验证 通过后 发修改请求 后台需要用户名 从本地拿
  handleOk = async () => {
    try {
      const values = await this.state.form.validateFields()
      //
      console.log('Success:', values)
      //
      window.sessionStorage.getItem('token')
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }

    // this.setState({
    //   isModalOpen: false
    // })
  }
  //弹框取消
  handleCancel = () => {
    this.state.form.resetFields()
    this.setState({
      isModalOpen: false,
    })
  }
  render() {
    const { collapsed, colorBgContainer, menuData, isModalOpen, form } =
      this.state
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            items={menuData}
            onClick={this.menuClick}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              position: 'relative',
              padding: 0,
              height: 55,
              backgroundColor: '#fff',
              lineHeight: '55px',
              boxShadow: '1px 1px 3px 0',
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
                position: 'absolute',
                fontSize: '16px',
                width: 55,
                height: 55,
              }}
            ></Button>
            <Dropdown
              menu={{
                items,
                onClick: this.openxg,
              }}
              placement="bottomRight"
              arrow
            >
              <Button
                title="用户"
                type="text"
                icon={<UserOutlined />}
                style={{
                  fontSize: 16,
                  width: 55,
                  height: 55,
                  position: 'absolute',
                  right: '75px',
                }}
              ></Button>
            </Dropdown>
            <Button
              title="退出系统"
              type="text"
              icon={<PoweroffOutlined />}
              style={{
                fontSize: 16,
                width: 55,
                height: 55,
                position: 'absolute',
                right: '20px',
              }}
              onClick={this.logout}
            ></Button>
          </Header>
          <Content
            style={{
              margin: '10px 12px',
              padding: 10,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
        {/* 弹出框密码修改 */}
        <Modal
          title="修改密码"
          okText="确定"
          cancelText="取消"
          styles={{ body: { display: 'flex', justifyContent: 'center' } }}
          open={isModalOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            name="basic"
            form={form}
            style={{
              width: '70%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="原密码"
              name="oldpassword"
              labelCol={{ span: 6 }}
              rules={[
                {
                  required: true,
                  message: '请输入原密码!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="新密码"
              name="newpassword"
              labelCol={{ span: 6 }}
              rules={[
                {
                  required: true,
                  message: '请输入新密码!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="password"
              labelCol={{ span: 6 }}
              rules={[
                {
                  required: true,
                  message: '请输入新密码!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newpassword') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error('输入的密码与新密码不一致！')
                    )
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    )
  }
}

export default withRouter(connect(mapStateToProps)(HomeView))
