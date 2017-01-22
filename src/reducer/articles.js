import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articlesState = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}