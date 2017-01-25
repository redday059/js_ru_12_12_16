import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap }from 'immutable'

const CommentModel = Record({
    'id': null,
    'user': null,
    'text': null
})

const DefaultReducerState = Record({
    error: null,
    entities: new OrderedMap({})
})

//const defaultState = arrayToMap(normalizedComments, CommentModel);

export default (commentsState = new DefaultReducerState({}), action) => {
    const { type, payload, randomId, response, error } = action
    switch (type) {
        case ADD_COMMENT:
            console.log("P A Y L O A D: ", payload)
            const { user, text } = payload;
            return commentsState.setIn(['entities', randomId], CommentModel({
                ...payload.comment, 'id': randomId,

            }));
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrayToMap(response, CommentModel))
            // return commentsState.set(randomId,CommentModel({
            //     'id': randomId,
            //     'user': payload.comment.user,
            //     'text': payload.comment.text
            // }))
    }

    return commentsState

}
