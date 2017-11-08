import alt from '../../alt'
import CrmerrorActions from './CrmerrorActions'

class CrmerrorStore {
    constructor() {
      this.bindActions(CrmerrorActions);
      this.crmError = [];
      this.pagination = {
        current: 1,
        pageSize: 5,
        total: 5
      };
    }

    fetchCrmErrorSuccess(data) {
      this.crmError = data;
    }

    getTatolSuccess(data) {
      this.pagination = data;
    }
}

export default alt.createStore(CrmerrorStore);