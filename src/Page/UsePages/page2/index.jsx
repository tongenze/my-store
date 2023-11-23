import React from 'react'
import { Input, Space, Tag, Select } from 'antd'
import MyTable from '../../../Components/myTable'
import MyForm from '../../../Components/myForm'

const data = [
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
]

const columns = [
  {
    title: 'Name',
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

class Page2 extends React.Component {
  state = {
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
  //form渲染数据
  formdata = [
    {
      id: 1,
      span: 6,
      label: '客户：',
      name: 'code1',
      component: <Input allowClear />,
    },
    {
      id: 2,
      span: 6,
      label: '格奥尔：',
      name: 'code2',
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
      label: '你的：',
      name: 'code3',
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

  render() {
    return (
      <div>
        <MyForm
          name='page2'
          formdata={this.formdata}
          submit={this.submit}
          onRef={(node) => (this.MyForm = node)}
        />
        <MyTable bordered size={'small'} columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Page2
