import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { DisplayFormikState } from './helper';
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props;
  return (
    <div>
      <h1>Sync Validation Demo</h1>
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

export const SyncValidationForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),

  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm', // helps with React DevTools
})(MyForm);