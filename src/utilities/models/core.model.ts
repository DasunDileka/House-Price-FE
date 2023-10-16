export interface FormValidatorFeildDto<T> {
    value: T,
    validator: 'text' | 'number' | 'object' | 'email',
    disable: boolean | null,
    error: string | null,
    isRequired: boolean
}