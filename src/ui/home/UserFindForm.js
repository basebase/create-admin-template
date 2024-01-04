import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, DatePicker, theme } from 'antd';

import { formSearch } from './search'

const { Option } = Select;
const { RangePicker } = DatePicker;
const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const children = [];
    for (let i = 0; i < formSearch.length; i ++) {
        let element = formSearch[i];
        let T = null;
        switch(element.type) {
            case "input":
                T = <Col span={6} key={`${element.key}`}>
                    <Form.Item
                        name={`${element.name}`}
                        label={`${element.label}`}
                        labelCol={{span: 8}}
                        wrapperCol={{span: 18}}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                break;
            case "select":
                T = <Col span={6} key={`${element.key}`}>
                        <Form.Item
                            name={`${element.name}`}
                            label={`${element.label}`}
                            labelCol={{span: 8}}
                            wrapperCol={{span: 18}}
                            
                        >
                            <Select>
                                <Option value="1">张三</Option>
                                <Option value="2">李四</Option>
                            </Select>
                        </Form.Item>
                </Col>
                break;
            
            case "date":
                T = <Col lg={8} xxl={6}  key={`${element.key}`}>
                        <Form.Item
                            name={`${element.name}`}
                            label={`${element.label}`}
                            labelCol={{span: 8}}
                            wrapperCol={{span: 25}}
                            
                        >
                            <RangePicker />
                        </Form.Item>
                </Col>
                break;
            
            default: break;
        }
        children.push(T);
    }
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form  form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  );
};
const UserForm = () => {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <>
      <AdvancedSearchForm />
      {/* <div style={listStyle}>Search Result List</div> */}
    </>
  );
};

export {UserForm}