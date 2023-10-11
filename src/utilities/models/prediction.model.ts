import { FormValidatorFeildDto } from "./core.model"

export interface PredictionFormInitialStateDto
{
    numberOfBedrooms: FormValidatorFeildDto<number | null>
    numberOfBathrooms: FormValidatorFeildDto<number | null>
    sizeOfLivingArea: FormValidatorFeildDto<number | null>
    sizeOfLandArea: FormValidatorFeildDto<number | null>
    numberOfFloors: FormValidatorFeildDto<number | null>
    currencyRate: FormValidatorFeildDto<number | null>
    location: FormValidatorFeildDto<string>
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