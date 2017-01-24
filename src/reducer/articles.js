import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, SUCCESS, START, FAIL } from '../constants'
// убираем import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap }from 'immutable'

const ArticleModel = Record({
    'id': null,
    'date': null,
    'title': null,
    'text': null,
    'comments':[]
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

//const defaultState = arrayToMap([], ArticleModel)

export default (articlesState = new DefaultReducerState({}), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id])
        case ADD_COMMENT:
            return articlesState.updateIn(['entities', payload.articleId, 'comments'], val => val.concat(randomId))
        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true)
        case LOAD_ALL_ARTICLES + SUCCESS:
            console.log('action ? ', action)

            return articlesState
                .mergeIn(['entities'], arrayToMap(response, ArticleModel))
                .set('loading', false)
                .set('loaded', true)
                .set('error', false);
        case LOAD_ALL_ARTICLES + FAIL:
            return articlesState
                .set('error', error)
                .set('loading', false);
        case LOAD_ARTICLE + SUCCESS:
            console.log('AAA: ',action)
            return articlesState.setIn(['entities', payload.id], new ArticleModel(response))
            //return articlesState.setIn(['entities', payload.id, 'text'], response.text)
    }
    return articlesState
}
