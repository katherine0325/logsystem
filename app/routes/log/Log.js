import React, { Component } from 'react'
import { Input, Button, Icon, DatePicker, Dropdown, Menu } from 'antd'
const { RangePicker } = DatePicker;

import LogActions from './LogActions'
import LogStore from './LogStore'

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = LogStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LogStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LogStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        const systemMenu = (
            <Menu>
                <Menu.Item>
                    <a onClick={e => {LogActions.getSystem('MSO')}}>MSO</a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={e => {LogActions.getSystem('CRM')}}>CRM</a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={e => {LogActions.getSystem('DS')}}>DS</a>
                </Menu.Item>
            </Menu>
        )

        const levelMenu = (
            <Menu>
                <Menu.Item>
                    <a onClick={e => {LogActions.getLevel('ERROR')}}>ERROR</a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={e => {LogActions.getLevel('WARN')}}>WARN</a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={e => {LogActions.getLevel('INFO')}}>INFO</a>
                </Menu.Item>
            </Menu>
        )

        return (
            <div>
                <div>
                    <h1>日志系统</h1>
                    日期：（不能超过3天）
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onChange={(value, dateString) => {}}
                        onOk={value => {LogActions.pickDateRange(value)}}
                    />
                    系统：
                    <Dropdown overlay={systemMenu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    等级：
                    <Dropdown overlay={levelMenu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Button type="primary" onClick={e => {LogActions.fetchLogs(this.state.dateRange, this.state.system, this.state.level)}}>Primary</Button>
                </div>
                <div>
                    {this.state.datas.map(i => (
                        <pre key={i._id}>{JSON.stringify(i, null, 2)}</pre>
                    ))}
                </div>
            </div>
        )
    }
}

export default Log