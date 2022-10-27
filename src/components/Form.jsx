import React, { useState } from "react";
import { useForm } from "../hooks/useForms";
import { useModal } from "../hooks/useModal";
import SendModal from "./SendModal";
import '../styles/form.css'

const Form = ({ option }) => {

  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    age: "",
  };

  const validationsForm = (form) => {
    let errors = {}
    let regexNumber = /^[0-9,+]*$/
    let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!form.fullName.trim()) {
      errors.name = "El campo 'Nombre completo' es requerido"
    } else if (!regexName.test(form.fullName.trim())) {
      errors.name = "El campo 'Nombre completo' solo acepta letras y espacios en blanco"
    }
    
    if(!form.email.trim()) {
      errors.email = "El campo 'Correo electronico' es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Correo electronico' es requerido"
    }

    if(!form.phone.trim()) {
      errors.phone = "El campo 'Celular' es requerido"
    } else if (!regexNumber.test(form.phone.trim())) {
      errors.phone = "El campo 'Celular' solo acepta numeros y el signo '+'"
    }

    if(!form.age.trim()) {
      errors.age = "el campo 'Edad' es requerido"
    } else if (form.age < 18 || form.age > 100) {
      errors.age = "La edad debe estar entre 18 a 100 años"
    }

    return errors
  };

  const {
    isOpen,
    closeModal,
    openModal
  } = useModal(false)

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm, closeModal, openModal);


  return (
    <section className="home">
      { isOpen && <SendModal/>}
      <h2>
        Hola, bienvenido, sabemos que quieres viajar en un <i>{option}</i>
      </h2>
      <article className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="inputs-forms">
            <input
              className="input-forms"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombre completo"
              value={form.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && <div className="validate">{errors.name}</div>}
            <input
              className="input-forms"
              type="email"
              id="email"
              name="email"
              placeholder="Correo electronico"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && <div className="validate">{errors.email}</div>}
            <input
              className="input-forms"
              type="text"
              id="phone"
              name="phone"
              placeholder="Celular"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.phone && <div className="validate">{errors.phone}</div>}
            <input
              className="input-forms"
              type="number"
              min={18}
              max={100}
              id="age"
              name="age"
              placeholder="Edad"
              value={form.age}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.age && <div className="validate">{errors.age}</div>}
          </div>
          <input className="input-forms-submit" type="submit" />
        </form>
      </article>
    </section>
  );
};

export default Form;
