import alt from '../alt'
import PageoneActions from './PageoneActions'

class PageoneStore {
  constructor() {
    this.bindActions(PageoneActions)
  }
}

export default alt.createStore(PageoneStore);