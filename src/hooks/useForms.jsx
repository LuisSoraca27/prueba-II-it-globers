import { useState } from "react";

export const useForm = (initialForm, validationsForm, closeModal, openModel) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name , value} = e.target

    setForm({
        ...form,
        [name]: value
    })
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form ))
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.keys(errors).length === 0) {
        console.log(form);
        openModel()
        setTimeout(() => {
          closeModal()
        }, 5000);
        setForm(initialForm)
    } else {
        return
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
