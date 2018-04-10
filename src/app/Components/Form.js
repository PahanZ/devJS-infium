import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';
// import {Link} from 'react-router';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;
const HorizontalForm = props => {
  const {No, Create, Supply, Comment} = props.inputsAtributes;
  console.log(props.inputsAtributes);
  return (
    <main>
      <Form
        layout="horizontal"
        onSubmit={function (e) {
          e.preventDefault();
          props.onSubmit();
        }
        }
        >
        <InputGroup size="large">
          <Col span={12}>
            <FormItem label="Number">
              <Input
                name={No.name}
                size="large"
                addonAfter={<Icon type="setting"/>}
                value={No.value}
                onChange={function (event) {
                  props.onChange(No.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Invoice Date">
              <DatePicker
                name={Create.name}
                size="large"
                value={Create.value}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange(Create.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Supply Date">
              <DatePicker
                name={Supply.name}
                size="large"
                value={Supply.value}
                format={'Do MMM YY'}
                onChange={function (event) {
                  props.onChange(Supply.name, event);
                }}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Comment">
              <TextArea
                name={Comment.name}
                rows={24}
                value={Comment.value}
                onChange={function (event) {
                  props.onChange(Comment.name, event);
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
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default HorizontalForm;
