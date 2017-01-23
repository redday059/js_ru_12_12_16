import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record }from 'immutable'

const CommentModel = Record({
    'id': null,
    'user': null,
    'text': null
})

const defaultState = arrayToMap(normalizedComments, CommentModel);

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId } = action
    switch (type) {
        case ADD_COMMENT:
            console.log("P A Y L O A D: ", payload)
            const { user, text } = payload;
            return commentsState.set(randomId,CommentModel({
                ...payload.comment, 'id': randomId,

            }))
            // return commentsState.set(randomId,CommentModel({
            //     'id': randomId,
            //     'user': payload.comment.user,
            //     'text': payload.comment.text
            // }))
    }

    return commentsState

}
