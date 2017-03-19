export const INCREMENT = 'INCREMENT'

export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const LOAD_ALL_ARTICLES = 'LOAD_ALL_ARTICLES'
export const LOAD_ARTICLE = 'LOAD_ARTICLE'
export const LOAD_ARTICLE_COMMENTS = 'LOAD_ARTICLE_COMMENTS'

export const CHANGE_DATE_RANGE = 'CHANGE_DATE_RANGE'
export const CHANGE_SELECTION = 'CHANGE_SELECTION'

export const START = 'START'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

export const LOAD_COMMENTS_FOR_PAGE = 'LOAD_COMMENTS_FOR_PAGE'
export const URL = PRODUCTION ? 'http://app-c3466245-e685-444c-b34c-7c57a1d12a1a.cleverapps.io':''
export const PATH_PREFIX = PRODUCTION ? '/' : '/'
// TODO: add appropriate routing for production
// export const PATH_PREFIX = PRODUCTION ? '/react/' : '/'