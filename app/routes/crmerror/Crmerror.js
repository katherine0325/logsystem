import React, { Component } from 'react'
import { Table, Input, Button, Icon, DatePicker } from 'antd'
const { RangePicker } = DatePicker;
import moment from 'moment';

import CrmerrorActions from './CrmerrorActions'
import CrmerrorStore from './CrmerrorStore'

class Crmerror extends Component {
    constructor(props) {
		super(props);
		this.state = CrmerrorStore.getState();
		this.onChange = this.onChange.bind(this);
	}

    componentDidMount() {
		CrmerrorStore.listen(this.onChange);

        var page = this.props.location.pathname.split('/')[2];
        CrmerrorActions.loadPage(page);
        CrmerrorActions.listLogs(this.state.initPagination, {}, {}, page);
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            var page = nextProps.location.pathname.split('/')[2];
            CrmerrorActions.loadPage(page);
            CrmerrorActions.listLogs(this.state.initPagination, {}, {}, page);
        } 
    }

	componentWillUnmount() {
		CrmerrorStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

    render() {
        const columns = [
    { title: '创建人', dataIndex: 'sUserName', key: 'sUserName', 
        filterDropdown: (
            <div className="custom-filter-dropdown">
                <Input
                    value={this.state.filters.sUserName.value}
                    onChange={e => {CrmerrorActions.changeFilters({key: 'sUserName', logic: 'include', value: e.target.value})}}
                    onPressEnter={e => {
                        CrmerrorActions.listLogs(this.state.initPagination, this.state.filters, {}, this.state.page);
                    }}
                />
            </div>
      ),
      /*filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput.focus());
      },*/
 }, 
    { title: '动作', dataIndex: 'sMethod', key: 'sMethod', filters: [
        { text: 'GET', value: 'GET' },
        { text: 'POST', value: 'POST' },
      ]}, 
    { title: 'Ip', dataIndex: 'sIp', key: 'sIp', filterDropdown: (
            <div className="custom-filter-dropdown">
                <Input
                    value={this.state.filters.sIp.value}
                    onChange={e => {CrmerrorActions.changeFilters({key: 'sIp', logic: 'include', value: e.target.value})}}
                    onPressEnter={e => {
                        CrmerrorActions.listLogs(this.state.initPagination, this.state.filters, {}, this.state.page);
                    }}
                />
            </div>
      )}, 
    { title: 'Url', dataIndex: 'sUrl', key: 'sUrl',filterDropdown: (
            <div className="custom-filter-dropdown">
                <Input
                    value={this.state.filters.sUrl.value}
                    onChange={e => {CrmerrorActions.changeFilters({key: 'sUrl', logic: 'include', value: e.target.value})}}
                    onPressEnter={e => {
                        CrmerrorActions.listLogs(this.state.initPagination, this.state.filters, {}, this.state.page);
                    }}
                />
            </div>
      )
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
                onChange={(value, dateString) => {
                    if(value && value.length === 0 && this.state.filters && this.state.filters.sCreateTime) {
                        CrmerrorActions.clearSCreateTime();
                        CrmerrorActions.listLogs(this.state.initPagination, this.state.filters, {}, this.state.page);
                    }
                }}
                onOk={value => {
                    CrmerrorActions.listLogs(this.state.pagination, Object.assign(this.state.filters, {sCreateTime: {logic: 'range', value: value.map(i => moment(i._d).format('YYYY-MM-DD HH:mm'))}}), {}, this.state.page)
                }}
            />
        )
    }
]

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        loading={this.state.reloadLoading}
                        onClick={e => {
                            CrmerrorActions.startLoading('reload');
                            CrmerrorActions.clearFilter();
                            CrmerrorActions.listLogs(this.state.initPagination, {}, {}, this.state.page)
                            }} >
                        Reload
                    </Button>
                </div>
                <Table
                    columns={columns}
                    expandedRowRender={record => <p>{JSON.stringify(record.oOption, null, 2)}</p>}
                    dataSource={this.state.logs}
                    pagination={this.state.pagination}
                    onChange={(pagination, filters, sorter) => {
                        if(filters.sMethod) {
                            filters.sMethod = {logic: '=', value: filters.sMethod}
                        }
                        CrmerrorActions.listLogs(pagination, Object.assign(this.state.filters, filters), sorter, this.state.page);
                        }} />
            </div>
        )
    }
}

export default Crmerror