export const validateFormData = async (data: {[key:string]:any}): Promise<[any, boolean]> => {
  let isValid = true
  let validatedData = data
  return new Promise((resolve) => {
    for (const [field, fieldData] of Object.entries(data)) {
      if (fieldData.validator === 'text') {
        let error = null
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      // if (fieldData.validator === 'date') {
      //   let error = null
      //   if (fieldData.isRequired && (!fieldData.value || (!moment(fieldData.value).isValid()))) {
      //     error = 'This valid date is required.'
      //     isValid = false
      //   }

      //   validatedData = {
      //     ...validatedData,
      //     [field]: {
      //       ...fieldData as {},
      //       error
      //     }
      //   }
      // }

      if (fieldData.validator === 'object') {
        let error = null
        if (fieldData.isRequired && (!fieldData.value || (!!fieldData.value && Object.keys(fieldData.value).length === 0 && fieldData.value.constructor === Object))) {
          error = 'This field is required.'
          isValid = false
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'array') {
        let error = null
        if (!!fieldData.value && fieldData.value.length === 0 && fieldData.isRequired) {
          error = 'This field is required.'
          isValid = false
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'email') {
        let error = null
        // eslint-disable-next-line no-useless-escape
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value) {
          if (!emailReg.test(fieldData.value)) {
            isValid = false
            error = 'Email is not valid'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'number') {
        let error = null
        if (fieldData.isRequired && (fieldData.value?.length === 0 || fieldData.value === null)) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value < 0) {
          error = 'This field must be a positive number.'
          isValid = false
        }
        if (fieldData.value) {
          if (isNaN(fieldData.value)) {
            isValid = false
            error = 'This field must be a number'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'greaterThanZeroNumber') {
        let error = null
        if (fieldData.isRequired && (fieldData.value.length === 0)) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value <= 0) {
          error = 'This field must be a greater than zero.'
          isValid = false
        }
        if (fieldData.value) {
          if (isNaN(fieldData.value)) {
            isValid = false
            error = 'This field must be a number'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'textWithoutWhiteSpace') {
        let error = null
        // eslint-disable-next-line no-useless-escape
        const textReg = /\s/
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value) {
          if (textReg.test(fieldData.value)) {
            isValid = false
            error = 'This field cannot contain whitespaces.'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }

      if (fieldData.validator === 'contact') {
        let error = null
        // eslint-disable-next-line no-useless-escape
        const telReg = /^\d{10}$/
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value) {
          if (!telReg.test(fieldData.value.toString())) {
            isValid = false
            error = 'Contact Number is not valid'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error
          }
        }
      }
    }
    resolve([validatedData, isValid])
  })
}
