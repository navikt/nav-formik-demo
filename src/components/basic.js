import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { DisplayFormikState } from './helper';

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div>
      <h1>Basic Formik usage Demo for NAV</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: 'block' }}>
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email ? (
              'text-input error'
            ) : (
              'text-input'
            )
          }
        />
        {errors.email &&
        touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}

        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>

        <DisplayFormikState {...props} />
      </form>
    </div>
  );
};

export const BasicForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm', // helps with React DevTools
})(MyInnerForm);
