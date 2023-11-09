import React from 'react'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tag, Space } from 'antd'
import { withRouter } from '../../Utils'
import configureStore from '../../Store'
import { sendkeys } from '../../Router'
import {
  removeTag,
  clickTag,
  getsessionStorageData,
} from '../../Store/State/tagsdata'
import './content.css'

const mapStateToProps = (state) => {
  return {
    state,
  }
}
//校验当前页面路由 防止在地址直接修改路径 刷新 造成奇怪现象
const getkeys = function (obj) {
  const keys = sendkeys()
  const str = window.sessionStorage.getItem('tagkey')
  let tags = []
  if (str) {
    tags = JSON.parse(decodeURIComponent(window.atob(str)))
    if (tags.length !== 0) {
      const arr = obj.props.location.pathname.split('/')
      const key = arr[arr.length - 1]
      tags.forEach((i) => {
        let is = keys.find((item) => item === key)
        if (is) {
          if (i.key === key) {
            i.isactive = true
          } else {
            i.isactive = false
          }
        } else {
          tags = []
        }
      })
    }
  }
  return tags
}
class ContentView extends React.Component {
  componentDidMount() {
    //页面刷新时 获取本地存储的状态 放入redux
    this.props.dispatch(getsessionStorageData(getkeys(this)))
    // 监听redux state状态改变
    configureStore.subscribe(() => {
      this.setState({ items: configureStore.getState().tagesdata.tagsData })
    })
    //
  }
  state = {
    items: this.props.state.tagesdata.tagsData,
  }
  //移除tag
  preventDefault = (key) => {
    let str = this.props.location.pathname
    let arr = str.split('/')
    const nowkey = arr[arr.length - 1] //拿到当前路由

    return (e) => {
      e.preventDefault() //阻止默认事件
      let nextkey = ''
      if (nowkey === key) {
        //删除的tag是当前路由处理
        let Items = this.state.items
        Items.forEach((i, index) => {
          if (i.key === key) {
            let nexttag = Items[index - 1] || Items[index + 1]
            if (nexttag) {
              this.props.navigate('/home/content/' + nexttag.key)
              nextkey = nexttag.key
            } else {
              this.props.navigate('/home/content/')
            }
          }
        })
      }
      this.props.dispatch(removeTag({ key, nextkey }))
    }
  }
  //点击tag
  clickTag = (i) => {
    return (e) => {
      this.props.dispatch(clickTag(i.key))
      this.props.navigate('/home/content/' + i.key)
    }
  }

  render() {
    const { items } = this.state
    return (
      <div className="content_outside">
        <div
          className="content_tag"
          style={{
            borderBottom: `${items.length === 0 ? '' : '2px solid rgb(205, 204, 204)'
              }`,
          }}
        >
          <Space size={[0]} wrap>
            {items.map((i) => (
              <div
                key={i.key}
                style={{
                  marginRight: '8px',
                  marginBottom: '-2px',
                  borderBottom: `${i.isactive ? '2px solid rgb(95, 159, 255)' : ''
                    }`,
                }}
              >
                <Tag
                  className="tag"
                  size="large"
                  closeIcon
                  onClose={this.preventDefault(i.key)}
                  onClick={this.clickTag(i)}
                  key={i.key}
                  color={i.isactive ? 'processing' : ''}
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
