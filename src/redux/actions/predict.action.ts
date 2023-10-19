import { COMMON_ACTION_TYPES, PREDICT_ACTION_TYPES } from "../../utilities/constants"
import { PredictionDto } from "../../utilities/models/prediction.model"

const predictValue = (payload: PredictionDto) => {
    return {
        type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.REQUEST,
        payload: payload
    }
}

const predictValueClear =()=>
{
    return {
        type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.CLEAR
    }
}

export const predictAction = {
    predictValue,
    //predictValueClear
}
