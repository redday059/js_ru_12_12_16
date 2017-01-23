import $ from 'jquery'

export default store => next => action => {
    const {callAPI, ...rest} = action;
    if (!callAPI) return next(action);
    // next({...rest, randomId: generateRandomId()})
    $.get(callAPI)
        .done(response => next({...rest, response}))
}