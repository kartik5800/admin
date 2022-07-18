import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    doctor: [],
    error: ''
}

export const doctorReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_DOCTOR:
            return {
                ...state,
                isLoading: false,
                doctor: action.payload,
                error: ''
            }
        case ActionTypes.POST_DOCTOR:
            return {
                ...state,
                isLoading: false,
                doctor: state.doctor.concat(action.payload),
                error: ''
            }
            case ActionTypes.DELETE_DOCTOR:
                return {
                    ...state,
                    isLoading: false,
                    medicine: state.doctor.filter((l) => l.id !== action.payload),
                    error: ''
                }
        default:
            return state;
    }
}


