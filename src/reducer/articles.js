import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from './helpers'

const defaultState = arrayToMap(normalizedArticles)
export default (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            let afterDeleting = Object.assign({}, articlesState);
            delete afterDeleting[payload.id];
            return afterDeleting
    }

    return articlesState
}