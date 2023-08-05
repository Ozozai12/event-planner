import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import classnames from 'classnames';

import css from './FormWide.module.css';
import '../react-datepicker.css';

export const FormWide = () => {
  const [startDate, setStartDate] = useState(new Date());

  const regex = /^[a-zA-Z ]+$/i;

  const validateTitle = value => {
    if (!value) {
      return 'Title required';
    } else if (!regex.test(value)) {
      return 'Invalid input';
    }
  };

  const validateDescription = value => {
    if (!value) {
      return 'Description required';
    }
  };

  const validateTime = value => {
    if (!value) {
      return 'Time required';
    }
  };

  const validateLocation = value => {
    if (!value) {
      return 'Location required';
    } else if (!regex.test(value)) {
      return 'Invalid input';
    }
  };

  const handleDateChange = date => {
    setStartDate(date);
  };

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: startDate,
          time: '',
          location: '',
          category: 'Art',
          priority: 'Low',
        }}
        onSubmit={values => {
          console.log({ ...values, date: startDate });
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formContainer}>
              <ul className={css.column}>
                <li className={css.fieldContainer}>
                  <label htmlFor="title" className={css.inputTitle}>
                    Title
                  </label>

                  <Field
                    type="text"
                    name="title"
                    id="title"
                    validate={validateTitle}
                    className={classnames(css.input, {
                      [css.inputError]: errors.title && touched.title,
                    })}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className={css.errorMessage}
                  />
                </li>

                <li className={css.fieldContainer}>
                  <label htmlFor="description" className={css.inputTitle}>
                    Description
                  </label>

                  <Field
                    type="text"
                    name="description"
                    as="textarea"
                    validate={validateDescription}
                    className={css.descrInput}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className={css.errorMessage}
                  />
                </li>
              </ul>

              <ul className={css.column}>
                <li className={css.fieldContainer}>
                  <label htmlFor="date" className={css.inputTitle}>
                    Select date
                  </label>

                  <Field name="date" type="date">
                    {() => (
                      <DatePicker
                        minDate={new Date()}
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        className={css.datePicker}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="date"
                    component="div"
                    className={css.errorMessage}
                  />
                </li>

                <li className={css.fieldContainer}>
                  <label htmlFor="time" className={css.inputTitle}>
                    Select time
                  </label>

                  <Field
                    type="time"
                    name="time"
                    className={css.input}
                    validate={validateTime}
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className={css.errorMessage}
                  />
                </li>
                <li className={css.fieldContainer}>
                  <label htmlFor="location" className={css.inputTitle}>
                    Location
                  </label>

                  <Field
                    type="text"
                    name="location"
                    validate={validateLocation}
                    className={classnames(css.input, {
                      [css.inputError]: errors.location && touched.location,
                    })}
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className={css.errorMessage}
                  />
                </li>
              </ul>

              <ul className={css.column}>
                <li className={css.fieldContainer}>
                  <label htmlFor="category" className={css.inputTitle}>
                    Select category
                  </label>
                  <Field
                    component="select"
                    name="category"
                    className={css.select}
                  >
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="business">Business</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="party">Party</option>
                    <option value="sport">Sport</option>
                  </Field>
                </li>

                <li className={css.fieldContainer}>
                  <label htmlFor="priority" className={css.inputTitle}>
                    Select priority
                  </label>
                  <Field
                    component="select"
                    name="priority"
                    className={css.select}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Field>
                </li>
              </ul>
            </div>

            <button type="submit" className={css.saveButton}>
              <span>Add event</span>
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
