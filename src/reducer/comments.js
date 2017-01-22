import { } from '../constants'
import { normalizedComments } from '../fixtures'

export default (commentsState = normalizedComments, action) => {
    const { type, payload } = action

    // switch (type) {
    //     case:
    //         return articlesState.filter(article => article.id !== payload.id)
    // }

    return commentsState
}