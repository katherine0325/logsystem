import React, { Component } from 'react'
import { Input, Button, Icon, DatePicker, Dropdown, Menu, Alert } from 'antd'
const { RangePicker } = DatePicker;
import moment from 'moment'

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
                        size="large"
                        disabledDate={current => {
                            return current.valueOf() > new Date(moment().format('YYYY-MM-DD') + ' 23:59') || current.valueOf() < new Date(moment().subtract(1, "months").format("YYYY-MM-DD"));
                        }}
                        ranges={{ '今天': [moment(), moment()], '昨天': [moment(), moment().endOf('month')], '最近三天': [moment(), moment()] }}
                        defaultValue={[moment(moment().format('YYYY-MM-DD') + ' 00:00', 'YYYY-MM-DD HH:mm'), moment(moment().format('YYYY-MM-DD') + ' 23:59', 'YYYY-MM-DD HH:mm')]}
                        format="YYYY-MM-DD HH:mm"
                        showTime={{ format: 'HH:mm' }}
                        onChange={(value, dateString) => {}}
                        onOk={value => {LogActions.pickDateRange(value)}}
                    />
                    系统：
                    <Dropdown size="large" overlay={systemMenu} placement="bottomCenter">
                        <Button>{this.state.system}</Button>
                    </Dropdown>
                    等级：
                    <Dropdown size="large" overlay={levelMenu} placement="bottomCenter">
                        <Button>{this.state.level}</Button>
                    </Dropdown>
                    <Button type="primary" size="large" onClick={e => {LogActions.fetchLogs(this.state.dateRange, this.state.system, this.state.level)}}>搜索</Button>
                </div>
                <Alert style={{display: this.state.total > 0? '': 'none'}} message={`共计${this.state.total}条数据。${this.state.total > 10? '数据量超过1000，仅显示1000条，如需全面显示，请缩小时间范围': ''}`} type="info" />
                <div>
                    {this.state.logData.map(i => (
                        <pre key={i._id}>{JSON.stringify(i, null, 2)}</pre>
                    ))}
                </div>
                <div style={{display: this.state.total == 0? '': 'none'}}>
                    没有找到任何数据
                </div>
            </div>
        )
    }
}

export default Log