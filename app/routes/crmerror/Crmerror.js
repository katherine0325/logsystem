import React, { Component } from 'react'
import { Table, Input, Button, Icon, DatePicker } from 'antd'
const { RangePicker } = DatePicker;

import CrmerrorActions from './CrmerrorActions'
import CrmerrorStore from './CrmerrorStore'

const columns = [
    { title: '创建人', dataIndex: 'sUserName', key: 'sUserName', filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ], onFilter: (value, record) => record.sUserName.includes(value),
    sorter: (a, b) => a.name.length - b.name.length,
    //   sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
 }, 
    { title: '动作', dataIndex: 'sMethod', key: 'sMethod', filters: [
        { text: 'GET', value: 'GET' },
        { text: 'POST', value: 'POST' },
      ], onFilter: (value, record) => record.sMethod.includes(value), }, 
    { title: 'Ip', dataIndex: 'sIp', key: 'sIp', onFilter: (value, record) => record.sUserName.includes(value), }, 
    { title: 'Url', dataIndex: 'sUrl', key: 'sUrl', onFilter: (value, record) => record.sUserName.includes(value),
/*filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            placeholder="Search name"
          />
          <Button type="primary">Search</Button>
        </div>
      ) */
    },
    { title: '创建时间', dataIndex: 'sCreateTime', key: 'sCreateTime', 
        filterDropdown: (
            <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                onChange={e => {}}
                onOk={e => {}}
            />
        )
    }
]

class Crmerror extends Component {
    constructor(props) {
		super(props);
		this.state = CrmerrorStore.getState();
		this.onChange = this.onChange.bind(this);
	}

    componentDidMount() {
		CrmerrorStore.listen(this.onChange);

        CrmerrorActions.fetchCrmError(this.state.pagination, {}, {});
        CrmerrorActions.getTatol(this.state.pagination, {});
	}

	componentWillUnmount() {
		CrmerrorStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

    render() {
        return (
            <Table
                columns={columns}
                expandedRowRender={record => <p>{JSON.stringify(record.oOption, null, 2)}</p>}
                dataSource={this.state.crmError}
                pagination={this.state.pagination}
                onChange={(pagination, filters, sorter) => {
                    CrmerrorActions.fetchCrmError(pagination, filters, sorter);
                    CrmerrorActions.getTatol(pagination, filters);
                    }} />
        )
    }
}

export default Crmerror