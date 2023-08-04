import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import classnames from 'classnames';

import css from './FormWide.module.css';
import '../react-datepicker.css';

export const FormWide = () => {
  const [startDate, setStartDate] = useState(new Date());

  const validateTitle = value => {
    if (!value) {
      return 'Title required';
    } else if (!/^[a-zA-Z ]+$/i.test(value)) {
      return 'Invalid input';
    }
  };

  const validateLocation = value => {
    if (!value) {
      return 'Location required';
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      return 'Invalid input';
    }
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
          category: '',
          priority: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
                  <div className={css.errorField}>
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
                  </div>
                </li>

                <li className={css.fieldContainer}>
                  <label htmlFor="description" className={css.inputTitle}>
                    Description
                  </label>
                  <Field
                    type="text"
                    name="description"
                    as="textarea"
                    className={css.descrInput}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="errorMessage"
                  />
                </li>
              </ul>

              <ul className={css.column}>
                <li className={css.fieldContainer}>
                  <label htmlFor="date" className={css.inputTitle}>
                    Select date
                  </label>

                  <DatePicker
                    minDate={new Date()}
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className={css.datePicker}
                  />
                </li>

                <li className={css.fieldContainer}>
                  <label htmlFor="time" className={css.inputTitle}>
                    Select time
                  </label>
                  <Field type="time" name="time" className={css.input} />
                </li>
                <li className={css.fieldContainer}>
                  <label htmlFor="location" className={css.inputTitle}>
                    Location
                  </label>
                  <div className={css.errorField}>
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
                  </div>
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
