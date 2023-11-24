import React, { useContext, useEffect, useRef, useState } from 'react'
import { Table, Form, Input } from 'antd'
import './table.css'
const EditableContext = React.createContext(null)
//行配置
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}
//单元格可编辑配置
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(EditableContext)
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])
  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    })
  }
  const save = async () => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({
        ...record,
        ...values,
      })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }
  let childNode = children
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }
  return (
    <td {...restProps} style={editable ? { width: '200px' } : {}}>
      {childNode}
    </td>
  )
}

//
class MyTable extends React.Component {
  componentDidMount() {}
  components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }
  render() {
    const { bordered, size, columns, dataSource } = this.props
    return (
      <Table
        rowClassName={() => 'editable-row'}
        bordered={bordered}
        size={size}
        columns={columns}
        dataSource={dataSource}
        rowSelection={this.props.rowSelection ? this.props.rowSelection : false}
        pagination={{
          total: dataSource.length,
          showSizeChanger: true,
        }}
        components={this.components}
        onRow={(record) => {
          return {
            onClick: this.props.onClickRow
              ? this.props.onClickRow(record)
              : (event) => {}, // 点击行
            onDoubleClick: (event) => {},
            onContextMenu: (event) => {},
            onMouseEnter: (event) => {}, // 鼠标移入行
            onMouseLeave: (event) => {},
          }
        }}
      />
    )
  }
}

export default MyTable
