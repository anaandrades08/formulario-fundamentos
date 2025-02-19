import { useState, useEffect } from "react";
import { ValidationError } from "yup";

const useValidation = (values, schema) => {
  const [errors, setErrors] = useState({});

  const validate = async () => {
    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
    } catch (e) {
      if (e instanceof ValidationError) {
        const validationErrors = {};
        e.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  useEffect(() => {
    validate();
  }, [values]);

  return { errors };
};

export default useValidation;
