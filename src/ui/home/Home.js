import React, { useState } from 'react';
import { Col, Row, Card, Checkbox, Button, Form, Input, Select, theme } from 'antd';
import {
    UsergroupDeleteOutlined,
    MessageOutlined,
    PayCircleOutlined,
    ShoppingCartOutlined,
    LockOutlined, 
    UserOutlined,
  } from '@ant-design/icons';

import {UserForm} from './UserFindForm'
  

import './home.css'


const { Option } = Select;

export default class Home extends React.Component {
    
    render() {

        return (
            <div>
                <div className="total">
                    <Row gutter={[10, 10]}>
                            <Col span={6}>
                                <Card className="total-data">
                                    <div className="card-total-content">
                                        <div className="d-icon">
                                            <UsergroupDeleteOutlined />
                                        </div>
                                        <div className="d-data">
                                            <div>今日注册人数</div>
                                            <div>102,400</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card className="total-data">
                                    <div className="card-total-content">
                                        <div className="d-icon">
                                            <MessageOutlined />
                                        </div>
                                        <div className="d-data">
                                            <div>今日报警数</div>
                                            <div>2,400</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card className="total-data">
                                    <div className="card-total-content">
                                        <div className="d-icon">
                                            <PayCircleOutlined />
                                        </div>
                                        <div className="d-data">
                                            <div>今日收入</div>
                                            <div>222,400</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card className="total-data">
                                    <div className="card-total-content">
                                        <div className="d-icon">
                                            <ShoppingCartOutlined />
                                        </div>
                                        <div className="d-data">
                                            <div>今日进件人数</div>
                                            <div>1800</div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                    </Row>
                </div>
                <UserForm />
            </div>
        )
    }
}
