import alt from '../../alt';

class CrmerrorActions
{
	constructor() {
		this.generateActions(
			'fetchCrmErrorSuccess',
			'getTatolSuccess'
		);
	}

	fetchCrmError(pagination, filters, sorter) {
		$.ajax({
			method: 'GET', 
			url: '/api/log/fetch',
			data: {pagination, filters, sorter}
		}).done(data => {
			data.forEach(i => {
				i.key = i._id;
			})
			this.actions.fetchCrmErrorSuccess(data);
		})
	}

	getTatol(pagination, filters) {
		$.ajax({
			method: 'GET',
			url: '/api/log/count',
			body: {pagination, filters}
		}).done(data => {
			this.actions.getTatolSuccess({
				current: pagination.current,
				pageSize: pagination.pageSize,
				total: data.total
			});
		})
	}
}

export default alt.createActions(CrmerrorActions);