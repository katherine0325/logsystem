import alt from '../../alt'
import SearchIndexActions from './SearchIndexActions'

class SearchIndexStore {
  constructor() {
    this.bindActions(SearchIndexActions);
  }
}

export default alt.createStore(SearchIndexStore);