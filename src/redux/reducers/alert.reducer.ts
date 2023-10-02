import {CATEGORY_ACTION_TYPES, COMMON_ACTION_TYPES, LOGIN_ACTION_TYPES, PRODUCT_ACTION_TYPES, REGISTRATION_ACTION_TYPES } from "../../utilities/constants";
import { AlertActionDto } from '../../utilities/models/alert.model'

const INITIAL_STATE = {
    addCategoryAlert: {
        message: null,
        severity: null,
        display: false
    },
    editCategoryAlert: {
        message: null,
        severity: null,
        display: false
    },
    addBrandAlert: {
        message: null,
        severity: null,
        display: false
    },
    editBrandAlert: {
        message: null,
        severity: null,
        display: false
    },
    addProductAlert: {
        message: null,
        severity: null,
        display: false
    },
    editProductAlert: {
        message: null,
        severity: null,
        display: false
    },
    signupUserAlert: {
        message: null,
        severity: null,
        display: false
    },
    signinUserAlert: {
        message: null,
        severity: null,
        display: false
    }

}

const alertReducer = (state = INITIAL_STATE, action: AlertActionDto) => {
    switch (action.type) {
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT:
            return {
                ...state,
                addCategoryAlert: {
                    ...state.addCategoryAlert,
                    message: action.message,
                    severity: action.severity,
                    display: true
                }
            }
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                addCategoryAlert: {
                    message: null,
                    severity: null,
                    display: false

                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT:
            return {
                ...state,
                editCategoryAlert: {
                    ...state.editCategoryAlert,
                    message: action.message,
                    severity: action.severity,
                    display: true
                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                editCategoryAlert: {
                    message: null,
                    severity: null,
                    display: false

                }
            }
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT:
            return {
                ...state,
                addProductAlert: {
                    ...state.addProductAlert,
                    message: action.message,
                    severity: action.severity,
                    display: true
                }
            }
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                addProductAlert: {
                    message: null,
                    severity: null,
                    display: false

                }
            }
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT:
            return {
                ...state,
                editProductAlert: {
                    ...state.editProductAlert,
                    message: action.message,
                    severity: action.severity,
                    display: true
                }
            }
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.CLEAR_ALERT:
            return {
                ...state,
                editProductAlert: {
                    message: null,
                    severity: null,
                    display: false

                }
            }
            case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.SET_ALERT:
                return {
                    ...state,
                    signupUserAlert: {
                        ...state.signupUserAlert,
                        message: action.message,
                        severity: action.severity,
                        display: true
                    }
                }
            case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.CLEAR_ALERT:
                return {
                    ...state,
                    signupUserAlert: {
                        message: null,
                        severity: null,
                        display: false
    
                    }
                }
            case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SET_ALERT:
                return {
                    ...state,
                    signinUserAlert: {
                        ...state.signinUserAlert,
                        message: action.message,
                        severity: action.severity,
                        display: true
                    }
                }
            case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.CLEAR_ALERT:
                return {
                    ...state,
                    signinUserAlert: {
                        message: null,
                        severity: null,
                        display: false
    
                    }
                }
        default:
            return state
    }
}

export default alertReducer
