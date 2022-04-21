import React, { useState } from 'react'

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors,setErrors] = useState({})


      const handleInputChange = (e) => {
          const {name, value} = e.target
        setValues({
          ...values,
          [name]: value,
        });
      };

  return { 
      values,
      handleInputChange,
      errors,
      setErrors

  }
}

export default useForm