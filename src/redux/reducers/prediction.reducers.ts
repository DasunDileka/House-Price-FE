import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, PREDICT_ACTION_TYPES } from "../../utilities/constants";
import { PredictStateDto } from "../../utilities/models";

const INITIAL_STATE: PredictStateDto = {

    predict: {
        data: "",
        error: null,
        isLoading: false,
        status: null
    }
}

const predictReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {

        // GET Menu 
        case PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                predict: {
                    ...state.predict,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: ""
                }
            }
        case PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                predict: {
                    ...state.predict,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                predict: {
                    ...state.predict,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: ""
                }
            }
        case PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                predict: {
                    ...state.predict,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: ""
                }
            }
        default:
            return state

    }
}

export default predictReducer