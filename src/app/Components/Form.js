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
      Create: null,
      Supply: null
    };
    this.handleChangeCreate = this.handleChange.bind(this, 'Create');
    this.handleChangeSupply = this.handleChange.bind(this, 'Supply');
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
      No: form.elements.No.value,
      Create: this.state.Create,
      Supply: this.state.Supply,
      Comment: form.elements.Comment.value
    };
    if (Object.values(invoiceData).some(el => el === '' || el === null)) {
      this.setState({typeBnt: 'danger', textBtn: 'Fill the filds'});
      return;
    }
    this.props.onSubmit({
      id: (this.props.values) ?
        this.props.values.id :
        Math.random().toString(36).replace('.', ''),
      No: Number(invoiceData.No),
      Create: moment(invoiceData.Create._d).format('DD MMM YYYY'),
      Supply: moment(invoiceData.Supply._d).format('DD MMM YYYY'),
      Comment: invoiceData.Comment
    });
  }
  componentDidMount() {
    if (this.props.values !== undefined) {
      const {Create, Supply} = this.props.values;
      this.setState({Create: moment(Create), Supply: moment(Supply)});
    }
  }
  render() {
    // console.log(this.props.values.key);
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
                  name="No"
                  defaultValue={(this.props.values) ? this.props.values.No : ''}
                  onChange={this.handleBtnStyleChange}
                  addonAfter={<Icon type="setting"/>}
                  />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Invoice Date">
                <DatePicker
                  size="large"
                  value={this.state.Create}
                  format={'DD MMMM YYYY'}
                  onChange={this.handleChangeCreate}
                  />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Supply Date">
                <DatePicker
                  size="large"
                  value={this.state.Supply}
                  format={'DD MMMM YYYY'}
                  onChange={this.handleChangeSupply}
                  />
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Comment">
                <TextArea
                  rows={24}
                  defaultValue={(this.props.values) ? this.props.values.Comment : ''}
                  onChange={this.handleBtnStyleChange}
                  name="Comment"
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
