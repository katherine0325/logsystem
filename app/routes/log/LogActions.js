import { notification } from 'antd';
import alt from '../../alt';

class LogActions
{
	constructor() {
		this.generateActions(
			'pickDateRange',
			'getSystem',
			'getLevel',
			'fetchLogsSuccess'
		)
	}

	fetchLogs(dateRange, system, level) {
		if(!dateRange || !dateRange.from || !dateRange.to || !system || !level) {
			notification.warn({message: '缺少参数'});
			return false;
		}

		$.ajax({
			method: 'GET',
			url: '/sapi/log/list',
			data: {dateRange, system, level}
		}).done(data => {
			this.actions.fetchLogsSuccess(data);
		}).fail(data => {
			notification.error({message: '服务器出错，请刷新后再试'});
		})
	}
}

export default alt.createActions(LogActions);