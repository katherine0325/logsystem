import moment from 'moment'

import alt from '../../alt'
import LogActions from './LogActions'

class LogStore {
  constructor() {
    this.bindActions(LogActions);
    this.logData = [];
    this.total = -1;
    this.dateRange = {
        from: moment().format('YYYY-MM-DD') + ' 00:00',
        to: moment().format('YYYY-MM-DD') + ' 23:59'
    };
    this.system = 'CRM';
    this.level = 'ERROR';
  }

  onPickDateRange(value) {
    this.dateRange.from = moment(value[0]._d).format('YYYY-MM-DD HH:mm:ss');
    this.dateRange.to = moment(value[1]._d).format('YYYY-MM-DD HH:mm:ss');
  }

  onGetSystem(system) {
    this.system = system;
  }

  onGetLevel(level) {
    this.level = level;
  }

  onFetchLogsSuccess(logData) {
    this.logData = logData.result;
    this.total = logData.total;
  }
}

export default alt.createStore(LogStore);