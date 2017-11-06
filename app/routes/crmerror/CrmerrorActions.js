import alt from '../../alt';

class CrmerrorActions
{
	constructor() {
		this.generateActions(
			'fetchCrmErrorSuccess'
		);
	}

	fetchCrmError() {
		fetch('/api/log/fetch')
			.then(response => response.json())
			.then(data => {
				data.forEach(i => {
					i.key = i._id;
				})
				this.actions.fetchCrmErrorSuccess(data);
			})
			.catch(e => console.log(e.toString()))
	}
}

export default alt.createActions(CrmerrorActions);