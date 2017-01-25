import { INCREMENT, DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS,
    START, SUCCESS, FAIL} from '../constants'
import $ from 'jquery'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, comment },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleById(id) {
    return (dispatch, getState) => {
        if (getState().articles.getIn(['entities', id, 'text'])) return null

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        });

        setTimeout(() => {
            $.get('/api/article/' + id)
                .done(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id},
                    response
                }))
                .fail(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {id},
                    error
                }))
        } , 1000)
    }
}

export function loadArticleComments(id) {
    return (dispatch, getState) => {
        if (getState().articles.getIn(['entities', id, 'loadedComments'])
            || getState().articles.getIn(['entities', id, 'loadingComments'])) return null

        dispatch({
            type: LOAD_ARTICLE_COMMENTS + START,
            payload: { id }
        });

        setTimeout(() => {
            $.get('/api/comment?article=' + id)
                .done(response => dispatch({
                    type: LOAD_ARTICLE_COMMENTS + SUCCESS,
                    payload: {id},
                    response
                }))
                .fail(error => dispatch({
                    type: LOAD_ARTICLE_COMMENTS + FAIL,
                    payload: {id},
                    error
                }))
        } , 3000)
    }
}
