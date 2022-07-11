import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    User: [],
    error: ''
}

export const userReducer = (state = initalState, action) => {
    // console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.LOADING_USER:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ActionTypes.GET_USER:
            return {
                ...state,
                isLoading: false,
                User: action.payload,
                error: ''
            }
        case ActionTypes.POST_USER:
            return {
                ...state,
                isLoading: false,
                User: state.User.concat(action.payload),
                error: ''
            }
        case ActionTypes.ERROE_USER:
            return {
                ...state,
                isLoading: false,
                User: [],
                error: action.payload
            }
        default:
            return state;
    }
}


