import { } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from './helpers'

const defaultState = arrayToMap(normalizedComments);

export default (commentsState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        // case:
        //     return articlesState.filter(article => article.id !== payload.id)
    }

    return commentsState
}