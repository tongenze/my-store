import React from 'react'
import { Input, Row, Col, Form, Button, Select } from 'antd'
import { withRouter } from '../../Utils'
class MyForm extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.onRef && this.props.onRef(this)
  }
  state = {
    form: this.props.useform[0],
  }
  // submit = (val) => {
  //   console.log(val)
  // }
  ccc = () => {
    this.state.form.resetFields()
  }
  render() {
    const { formdata, form } = this.props
    return (
      <div>
        <Form
          name="wrap"
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
                <Button onClick={this.ccc}>xxx</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default withRouter(MyForm)
