import React from 'react'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tag, Space } from 'antd'
import { withRouter } from '../../Utils'
import configureStore from '../../Store'
import { removeTag, clickTag } from '../../Store/State/tagsdata'
import './content.css'

const mapStateToProps = (state) => {
  return {
    state,
  }
}

class ContentView extends React.Component {
  componentDidMount() {
    console.log(this)
    // 监听redux state状态改变
    configureStore.subscribe(() => {
      this.setState({ items: configureStore.getState().tagesdata.tagsData })

      let str = this.props.location.pathname
      let arr = str.split('/')
      console.log(arr[arr.length - 1])
    })
  }
  state = {
    items: [],
  }
  //移除tag
  preventDefault = (id) => {
    return (e) => {
      e.preventDefault()
      this.props.dispatch(removeTag(id))
    }
  }
  //点击tag
  clickTag = (i) => {
    return (e) => {
      this.props.dispatch(clickTag(i.id))
      this.props.navigate('/home/content/' + i.key)
    }
  }

  render() {
    const { items } = this.state
    return (
      <div className="content_outside">
        <div className="content_tag">
          <Space size={[0]} wrap>
            {items.map((i) => (
              <div
                style={{
                  marginRight: '8px',
                  marginBottom: '-2px',
                  borderBottom: `${i.bordeColor}`,
                }}
              >
                <Tag
                  className="tag"
                  size="large"
                  closeIcon
                  onClose={this.preventDefault(i.id)}
                  onClick={this.clickTag(i)}
                  key={i.key}
                  color={i.color}
                >
                  {i.label}
                </Tag>
              </div>
            ))}
          </Space>
        </div>
        <div className="content_route">
          <Outlet />
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(ContentView))
