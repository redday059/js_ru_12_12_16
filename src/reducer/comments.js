import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, SUCCESS } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap, Map, List }from 'immutable'

const CommentModel = Record({
    'id': null,
    'user': null,
    'text': null
});

const DefaultReducerState = Record({
    error: null,
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null

});

//const defaultState = arrayToMap(normalizedComments, CommentModel);

export default (commentsState = new DefaultReducerState({}), action) => {
    const { type, payload, randomId, response, error } = action
    switch (type) {
        case ADD_COMMENT:
            const { user, text } = payload;
            return commentsState.setIn(['entities', randomId], CommentModel({
                ...payload.comment, 'id': randomId,

            }));
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }

    return commentsState

}
