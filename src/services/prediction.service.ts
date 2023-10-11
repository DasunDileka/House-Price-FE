import { api,axiosPrivateInstance } from "."
import { PredictionDto } from "../utilities/models/prediction.model"

const predictCount = async (payload: PredictionDto) => {
    return api.post('/prediction', payload)
}

export const predictioService = {
    predictCount
}