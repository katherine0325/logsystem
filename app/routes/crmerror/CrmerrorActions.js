import alt from '../../alt';

class CrmerrorActions
{
	constructor() {
		this.generateActions(
			'listLogsSuccess',
			'changeFilters',
			'clearSCreateTime',
			'startLoading',
			'clearFilter',
			'loadPage'
		);
	}

	listLogs(pagination, filters, sorter, page) {
		$.ajax({
			method: 'GET', 
			url: '/api/log/list',
			data: {pagination, filters, sorter, page}
		}).done(data => {
			data.data.forEach(i => {
				i.key = i._id;
			})
			this.actions.listLogsSuccess(data);
		})
	}
}

export default alt.createActions(CrmerrorActions);