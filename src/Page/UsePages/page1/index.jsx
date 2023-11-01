import React from 'react'
import { Space, Tag, Table, Form, Input, Button, Col, Row } from 'antd'

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
class Page1 extends React.Component {
  render() {
    return (
      <div>
        <Form
          name="wrap"
          labelCol={{}}
          labelAlign="left"
          labelWrap
          wrapperCol={{}}
          colon={false}
          style={{ Width: '100%' }}
          layout="inline"
        >
          <Row>
            <Col span={6}>
              <Form.Item
                style={{ marginBottom: '10px' }}
                label="Normal label"
                name="username"
                labelAlign={{}}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Normal label" name="username" labelAlign={{}}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Normcccal label"
                name="username"
                labelAlign={{}}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Normal label" name="username" labelAlign={{}}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Normal label" name="username" labelAlign={{}}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Table bordered size="small" columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Page1
