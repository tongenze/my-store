import React from 'react'
import { Input, Space, Tag, Select } from 'antd'
import MyTable from '../../../Components/myTable'
import MyForm from '../../../Components/myForm'

//默认表列结构
const defaultColumns = [
  {
    title: 'Name',
    editable: true,
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]
//表行选择配置
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  //选择行配置 满足条件禁用
  getCheckboxProps: (record) => ({
    disabled: record.name === 'John Brown',
    // Column configuration not to be checked
    name: record.name,
  }),
}

class Page1 extends React.Component {
  state = {
    //select选项
    options: [
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ],
    //表数据
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '11',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '12',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '13',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '14',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '15',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '16',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '17',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '18',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '19',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '20',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '21',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '22',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ],
  }
  //选项框切换
  onChange = (value) => {
    if (value === 'tom') {
      this.MyForm.state.form.setFieldsValue({
        name3: 'lucy',
      })
    }
  }
  //选项框筛选
  filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  //form结构渲染
  formdata = [
    {
      id: 1,
      span: 6,
      label: '名字：',
      name: 'name1',
      component: <Input allowClear />,
    },
    {
      id: 2,
      span: 6,
      label: '名字：',
      name: 'name2',
      component: (
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          filterOption={this.filterOption}
          allowClear
          options={this.state.options}
        />
      ),
    },
    {
      id: 3,
      span: 6,
      label: '名字：',
      name: 'name3',
      component: (
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          filterOption={this.filterOption}
          allowClear
          options={this.state.options}
        />
      ),
    },
  ]
  //提交获取form表单数据
  submit = (obj) => {
    console.log(obj)
  }
  //单元格编辑完成保存进行
  handleSave = (row) => {
    const newData = [...this.state.data]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    this.setState({ data: newData })
  }
  //对表列做可编辑单元格操作
  columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: this.handleSave,
      }),
    }
  })
  //表行点击事件
  onClickRow = (obj) => {
    return (e) => {
      console.log(obj)
    }
  }
  render() {
    return (
      <div>
        <MyForm
          name="page1"
          formdata={this.formdata}
          submit={this.submit}
          onRef={(node) => (this.MyForm = node)}
        />
        <MyTable
          bordered
          size={'middle'}
          columns={this.columns}
          dataSource={this.state.data}
          onClickRow={this.onClickRow}
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
        />
      </div>
    )
  }
}

export default Page1
