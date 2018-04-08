import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';
import {Link} from 'react-router';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;

export default class HorizontalForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    return (
      <main>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <InputGroup size="large">
            <Col span={12}>
              <FormItem label="Number">
                <Input size="large" addonAfter={<Icon type="setting"/>} defaultValue="INV "/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Invoice Date">
                <DatePicker size="large"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Supply Date">
                <DatePicker size="large"/>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Comment">
                <TextArea rows={24}/>
              </FormItem>
            </Col>
            <Col span={24}>
              <div className="submit">
                <Button type="primary">
                  <Link to="/">Save</Link>
                </Button>
              </div>
            </Col>
          </InputGroup>
        </Form>
      </main>
    );
  }
}

HorizontalForm.propTypes = {
  form: PropTypes.object
};
