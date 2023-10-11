import {ENV_LOCAL} from "./environment.local"

export interface ENV_VARIABLES {
    APP_ENV: string,
    API_BASE: string,
   // API_BASEP: string
}

// DEFAULT PROD ENV VARIABLES
let ENV = ENV_LOCAL

// LOCAL ENV VARIABLES
if(process.env.REACT_APP_ENV === 'local') {
    ENV = ENV_LOCAL
}

// DEV ENV VARIABLES
// if(process.env.REACT_APP_ENV === 'dev') {
//     ENV = ENV_DEV
// }

// // QA ENV VARIABLES
// if(process.env.REACT_APP_ENV === 'qa') {
//     ENV = ENV_QA
// }

// // KATARAGAMA DEVALAYA PRODUCTION ENV VARIABLES
// if(process.env.REACT_APP_ENV === 'prod_kdit') {
//     ENV = ENV_PROD_KDIT
// }

// // SL CRISIS MANAGEMENT PRODUCTION ENV VARIABLES
// if(process.env.REACT_APP_ENV === 'prod_slcm') {
//     ENV = ENV_PROD_SLCM
// }

export default ENV
