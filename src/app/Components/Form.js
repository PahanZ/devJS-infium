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
                  props.onChange(event.target.name, event);
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
                format={'Do MMMM YY'}
                onChange={function (event) {
                  props.onChange(this.name, event);
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
                format={'Do MMMM YY'}
                onChange={function (event) {
                  props.onChange(this.name, event);
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
                  props.onChange(event.target.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <div className="submit">
              <Button type={props.checkStyleBtn} htmlType="submit">Save</Button>
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
  onSubmit: PropTypes.func,
  checkStyleBtn: PropTypes.string
};

export default HorizontalForm;
