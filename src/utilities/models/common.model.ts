export interface StateObjectDto<T> {
    data: T,
    isLoading: boolean,
    error: null,
    status: 'intial' | 'loading' | 'success' | 'error' | null;
}
