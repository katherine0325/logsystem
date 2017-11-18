import alt from '../../alt'
import CrmerrorActions from './CrmerrorActions'

class CrmerrorStore {
    constructor() {
      this.bindActions(CrmerrorActions);
      this.filters = {
        sUserName: {logic: '', value: ''},
        sIp: {logic: '', value: ''},
        sUrl: {logic: '', value: ''}
      };
      this.logs = [];
      this.initPagination = {
        current: 1,
        pageSize: 7,
        total: 7
      };
      this.pagination = {};
      this.reloadLoading = false;
      this.page = '';
    }

    onListLogsSuccess(data) {
      this.logs = data.data;
      this.pagination = {
        current: data.current,
        pageSize: data.pageSize,
        total: data.total
      }
      this.reloadLoading = false;
    }

    onChangeFilters(filter) {
      this.filters[filter.key] = {
        logic: filter.logic,
        value: filter.value
      }
    }

    onClearSCreateTime() {
      delete this.filters.sCreateTime;
    }

    onStartLoading(loadingField) {
      this[loadingField + 'Loading'] = true;
    }

    onClearFilter() {
      this.filters = {
        sUserName: {logic: '', value: ''},
        sIp: {logic: '', value: ''},
        sUrl: {logic: '', value: ''}
      }
    }

    onLoadPage(page) {
      this.page = page;
    }
}

export default alt.createStore(CrmerrorStore);