export interface FormValidatorFeildDto<T> {
    value: T,
    validator: 'text' | 'number' | 'object',
    disable: boolean | null,
    error: string | null,
    isRequired: boolean
}