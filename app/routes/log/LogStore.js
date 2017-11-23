import moment from 'moment'

import alt from '../../alt'
import LogActions from './LogActions'

class LogStore {
  constructor() {
    this.bindActions(LogActions);
    this.datas = [
        {
            _id: 1,
            name: '111',
            age: '222'
        },
        {
            _id: 2,
            name: '111',
            age: '222'
        }
    ];
    this.dateRange = {
        from: '',
        to: ''
    };
    this.system = '';
    this.level = '';
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
}

export default alt.createStore(LogStore);