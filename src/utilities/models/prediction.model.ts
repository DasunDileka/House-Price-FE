import { FormValidatorFeildDto } from "./core.model"

export interface PredictionFormInitialStateDto
{
    numberOfBedrooms: FormValidatorFeildDto<string | null>
    numberOfBathrooms: FormValidatorFeildDto<string | null>
    sizeOfLivingArea: FormValidatorFeildDto<string | null>
    sizeOfLandArea: FormValidatorFeildDto<string | null>
    numberOfFloors: FormValidatorFeildDto<string | null>
    currencyRate: FormValidatorFeildDto<string | null>
    location: FormValidatorFeildDto<string>
    prediction: FormValidatorFeildDto<string | null>
}

export interface PredictionDto {
    NumberOfBedroom: number | null
    NumberOfBathroom: number | null
    SizeOfLivingArea: number | null
    SizeOfLandArea: number | null
    NumberOfFloors: number | null
    CurrencyRate: number | null
    Locations: string
}

export interface PredictionResponse
{
    price : string
}