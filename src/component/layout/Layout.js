import React from 'react';
import Sider from '../sider/Sider';
import Header from '../header/Header';
import Footer from '../footer/Footer'
import Scrollbar from '../scrollbar/Scrollbar';
import Home from '../../ui/home/Home';
import './layout.css'

export default class Layout extends React.Component {
    render() {
        return (
            <div className="core">
                <Sider />
                <div className="context">
                    <Header />
                    <Scrollbar />
                    <div className="content">
                        <Home />
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}