import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, DatePicker, Col, Button} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const {TextArea} = Input;

class HorizontalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeBnt: 'primary',
      textBtn: 'Save',
      create: null,
      supply: null
    };
    this.handleChangeCreate = this.handleChange.bind(this, 'create');
    this.handleChangeSupply = this.handleChange.bind(this, 'supply');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBtnStyleChange = this.handleBtnStyleChange.bind(this);
  }
  handleChange(option, e) {
    this.handleBtnStyleChange();
    this.setState({[option]: e});
  }
  handleBtnStyleChange() {
    this.setState({typeBnt: 'primary', textBtn: 'Save'});
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const invoiceData = {
      no: form.elements.no.value,
      create: this.state.create,
      supply: this.state.supply,
      comment: form.elements.comment.value
    };
    if (Object.values(invoiceData).some(el => el === '' || el === null)) {
      this.setState({typeBnt: 'danger', textBtn: 'Fill the filds'});
      return;
    }
    this.props.onSubmit({
      id: (this.props.values) ?
        this.props.values.id :
        Math.random().toString(36).replace('.', ''),
      no: invoiceData.no,
      create: moment(invoiceData.create._d).format('DD MMM YYYY'),
      supply: moment(invoiceData.supply._d).format('DD MMM YYYY'),
      comment: invoiceData.comment
    });
  }
  componentDidMount() {
    if (this.props.values !== undefined) {
      const {create, supply} = this.props.values;
      this.setState({create: moment(create), supply: moment(supply)});
    }
  }
  render() {
    const {typeBnt, textBtn} = this.state;
    return (
      <main>
        <Form
          layout="horizontal"
          onSubmit={this.handleSubmit}
          >
          <InputGroup size="large">
            <Col span={12}>
              <FormItem label="Number">
                <Input
                  size="large"
                  name="no"
                  defaultValue={(this.props.values) ? this.props.values.no : ''}
                  onChange={this.handleBtnStyleChange}
                  addonAfter={<Icon type="setting"/>}
                  />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Invoice Date">
                <DatePicker
                  size="large"
                  value={this.state.create}
                  format={'DD MMMM YYYY'}
                  onChange={this.handleChangeCreate}
                  />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Supply Date">
                <DatePicker
                  size="large"
                  value={this.state.supply}
                  format={'DD MMMM YYYY'}
                  onChange={this.handleChangeSupply}
                  />
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Comment">
                <TextArea
                  rows={24}
                  defaultValue={(this.props.values) ? this.props.values.comment : ''}
                  onChange={this.handleBtnStyleChange}
                  name="comment"
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
  }
}

HorizontalForm.propTypes = {
  onSubmit: PropTypes.func,
  values: PropTypes.object
};

export default HorizontalForm;
