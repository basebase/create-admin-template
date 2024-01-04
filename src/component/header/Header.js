import React from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';


export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="h-menu">
                    <MenuFoldOutlined />
                </div>
                <div className="h-content">
                    首页
                </div>
            </div>
        )
    }
}