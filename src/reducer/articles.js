import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
// убираем import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record }from 'immutable'

const ArticleModel = Record({
    'id': null,
    'date': null,
    'title': null,
    'text': null,
    'comments':[]
})

const defaultState = arrayToMap([], ArticleModel)

export default (articlesState = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)
        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId,'comments'], val => val.concat(randomId))
        case LOAD_ALL_ARTICLES:
            console.log('action ? ', action)
            return articlesState.merge(arrayToMap(response, ArticleModel));
    }
    return articlesState
}
