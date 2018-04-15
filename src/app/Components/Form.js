import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;
const HorizontalForm = props => {
  const {typeBnt, textBtn} = props.checkStyleBtn;

// делать компонент и в componentDidMount обрабатывать пришедшие данные и если их нет

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
                size="large"
                addonAfter={<Icon type="setting"/>}
                onChange={props.handleChange}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Invoice Date">
              <DatePicker
                size="large"
                format={'Do MMMM YY'}
                onChange={props.handleChange}
                />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Supply Date">
              <DatePicker
                size="large"
                format={'Do MMMM YY'}
                onChange={props.handleChange}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Comment">
              <TextArea
                rows={24}
                onChange={props.handleChange}
                />
            </FormItem>
          </Col>
          <Col span={24}>
            <div className="submit">
              <Button type={typeBnt} htmlType="submit">{textBtn}</Button>
            </div>
          </Col>
        </InputGroup>
      </Form>
    </main>
  );
};

HorizontalForm.propTypes = {
  onSubmit: PropTypes.func,
  checkStyleBtn: PropTypes.object,
  handleChange: PropTypes.func
  // values: PropTypes.object
};

export default HorizontalForm;
