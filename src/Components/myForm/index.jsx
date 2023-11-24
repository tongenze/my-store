import React from 'react'
import { Row, Col, Form, Button } from 'antd'
import { withRouter } from '../../Utils'
class MyForm extends React.Component {
  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }
  state = {
    form: this.props.useform[0],
  }
  render() {
    const { formdata } = this.props
    const { form } = this.state
    return (
      <div>
        <Form
          name={this.props.name}
          form={form}
          labelCol={{}}
          labelAlign="left"
          labelWrap
          wrapperCol={{}}
          colon={false}
          style={{ Width: '100%' }}
          layout="inline"
          justify="center"
          autoComplete="off"
          initialValues={{
            remember: true,
          }}
          onFinish={this.props.submit}
        >
          <Row style={{ Width: '100%' }}>
            {formdata.map((item) => (
              <Col span={item.span} key={item.id}>
                <Form.Item
                  key={item.id}
                  style={{ marginBottom: '10px' }}
                  label={item.label}
                  name={item.name}
                  labelAlign={{}}
                >
                  {item.component}
                </Form.Item>
              </Col>
            ))}
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default withRouter(MyForm)
