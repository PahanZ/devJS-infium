import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';
// import {Link} from 'react-router';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;
const HorizontalForm = props => {
  const {number, invoiceDate, supplyDate, comment} = props.inputsAtributes;
  return (
    <main>
      <Form
        layout="horizontal" // onSubmit={this.handleSubmit}
        >
        <InputGroup size="large">
          <Col span={12}>
            <FormItem label="Number">
              <Input
                name={number.name}
                size="large"
                addonAfter={<Icon type="setting"/>}
                value={number.value}
                onChange={function (event) {
                  props.onChange(number.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Invoice Date">
              <DatePicker
                name={invoiceDate.name}
                size="large"
                value={invoiceDate.value}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange(invoiceDate.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Supply Date">
              <DatePicker
                name={supplyDate.name}
                size="large"
                value={supplyDate.value}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange(supplyDate.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Comment">
              <TextArea
                name={comment.name}
                rows={24}
                value={comment.value}
                onChange={function (event) {
                  props.onChange(comment.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <div className="submit">
              <Button type="primary" htmlType="submit">Save
                {/* <Link to="/">Save</Link> */}
              </Button>
            </div>
          </Col>
        </InputGroup>
      </Form>
    </main>
  );
};
// }

HorizontalForm.propTypes = {
  inputsAtributes: PropTypes.object,
  onChange: PropTypes.func
};

export default HorizontalForm;
