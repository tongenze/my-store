import React from 'react'
import { Space, Table, Tag } from 'antd'

class MyTable extends React.Component {
  componentDidMount() {
    console.log(this)
  }

  render() {
    const { bordered, size, columns, dataSource } = this.props
    return (
      <Table
        bordered={bordered}
        size={size}
        columns={columns}
        dataSource={dataSource}
      />
    )
  }
}

export default MyTable
