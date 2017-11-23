import alt from '../../alt';

class LogActions
{
	constructor() {
		this.generateActions(
			'pickDateRange'
		)
	}

	fetchLogs(dateRange, system, level) {
		console.log(dateRange)
		console.log(system)
		console.log(level)
	}
}

export default alt.createActions(LogActions);