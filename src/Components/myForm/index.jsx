import React from 'react'
import { Input, Row, Col, Form, Button } from 'antd'





class MyForm extends React.Component {
  componentDidMount() {
  }

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
      </div>
    )
  }
}

export default MyForm
