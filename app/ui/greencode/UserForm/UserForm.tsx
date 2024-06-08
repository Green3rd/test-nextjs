'use client';
import React from 'react';
import { Formik } from 'formik';
import { UserInput } from '../UserInput/UserInput';
import { formInput } from '../../../mock/formInput';
import { DropdownComponent } from '../DropdownComponent/DropdownComponent';
import './UserForm.css'
export const UserForm = () => (

  // const nameList
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors: any = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 100);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {formInput.sort((a, b) => a.order - b.order).map((item) => {
            switch (item.type) {
              case "text":
              case "number": return (
                <UserInput
                  name={item.name}
                  label={item.label}
                  type={item.type}
                  unit={item.unit}
                />
              )
              case "select":
                //  variant == dropdown 
                return (
                  <DropdownComponent
                    name={item.name}
                    label={item.label}
                    unit={item.unit}
                    items={item.choices}
                  />
                )
            }
          })}
          <input
            type="email"
            name="7"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className='UserForm__SubmitButton'>
            Submit
          </button>

          <button disabled={isSubmitting} className='UserForm__SubmitButton'>
            Add Form
          </button>
        </form>
      )}
    </Formik>
  </div >
);
