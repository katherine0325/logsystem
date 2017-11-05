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
				this.actions.fetchCrmErrorSuccess(data);
			})
			.catch(e => console.log(e.toString()))
	}
}

export default alt.createActions(CrmerrorActions);