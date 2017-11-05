import alt from '../../alt'
import CrmerrorActions from './CrmerrorActions'

class CrmerrorStore {
    constructor() {
      this.bindActions(CrmerrorActions);
      this.sortedInfo = {};
      this.searchText = "ss";
      this.crmError = [];
    }

    fetchCrmErrorSuccess(data) {
      this.crmError = data;
    }
}

export default alt.createStore(CrmerrorStore);