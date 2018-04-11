import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;
const HorizontalForm = props => {
  const {No, Create, Supply, Comment} = props.inputsAtributes;
  return (
    <main>
      <Form
        layout="horizontal"
        onSubmit={function (e) {
          props.onSubmit(e);
        }
        }
        >
        <InputGroup size="large">
          <Col span={12}>
            <FormItem label="Number">
              <Input
                name="No"
                size="large"
                addonAfter={<Icon type="setting"/>}
                value={No}
                onChange={function (event) {
                  props.onChange('No', event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Invoice Date">
              <DatePicker
                name="Create"
                size="large"
                value={Create}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange('Create', event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Supply Date">
              <DatePicker
                name="Supply"
                size="large"
                value={Supply}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange('Supply', event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Comment">
              <TextArea
                name="Comment"
                rows={24}
                value={Comment}
                onChange={function (event) {
                  props.onChange('Comment', event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <div className="submit">
              <Button type="primary" htmlType="submit">Save</Button>
            </div>
          </Col>
        </InputGroup>
      </Form>
    </main>
  );
};

HorizontalForm.propTypes = {
  inputsAtributes: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default HorizontalForm;
