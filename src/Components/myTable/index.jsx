import React from 'react'
import { Table } from 'antd'





class MyTable extends React.Component {
  componentDidMount() {
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
