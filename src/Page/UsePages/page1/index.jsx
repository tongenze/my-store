import React from 'react'
import { Input, Space, Tag, Select, Button } from 'antd'
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

class Page1 extends React.Component {
  onChange = (value) => {
    console.log(value)
    if (value === 'tom') {
      this.MyForm.state.form.setFieldValue({
        name1: 'lucy',
      })
    }
  }
  filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  state = {
    formdata: [
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
            options={[
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
            ]}
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
            options={[
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
            ]}
          />
        ),
      },
    ],
  }
  submit = (obj) => {
    console.log(obj)
  }

  render() {
    const { formdata } = this.state
    return (
      <div>
        <MyForm
          formdata={formdata}
          submit={this.submit}
          onRef={(node) => (this.MyForm = node)}
        />
        <MyTable bordered size={'small'} columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Page1
