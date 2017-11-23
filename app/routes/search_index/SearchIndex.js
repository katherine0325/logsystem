import React, { Component } from 'react'
import { Input, Button, Icon, DatePicker, Dropdown, Menu } from 'antd'
const { RangePicker } = DatePicker;

import SearchIndexActions from './SearchIndexActions'
import SearchIndexStore from './SearchIndexStore'

class SearchIndex extends Component {
    constructor(props) {
        super(props);
        this.state = SearchIndexStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchIndexStore.listen(this.onChange);
    }

    componentWillUnmount() {
        SearchIndexStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        const systemMenu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        )

        const levelMenu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        )

        return (
            <div style={{marginTop: 200, textAlign: 'center'}}>
                <h1 className="title">日志系统</h1>
                <div>
                    日期：（不能超过3天）
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={(value, dateString) => {}}
                        onOk={value => {}}
                    />
                    系统：
                    <Dropdown overlay={systemMenu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    等级：
                    <Dropdown overlay={levelMenu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Button type="primary">Primary</Button>
                </div>
            </div>
        )
    }
}

export default SearchIndex