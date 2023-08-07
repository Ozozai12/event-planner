import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import classnames from 'classnames';
import { format } from 'date-fns';

import pictureHandler from 'helpers/pictureHandler';

import css from './FormWide.module.css';
import '../react-datepicker.css';

export const FormWide = ({
  validateDescription,
  validateLocation,
  validateTime,
  validateTitle,
  addEvent,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleFormattedDate = date => {
    return date ? format(date, 'dd.MM.yyyy') : '';
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
          addEvent({
            ...values,
            date: handleFormattedDate(startDate),
            picture: pictureHandler(values.category),
          });
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
                    className={classnames(css.descrInput, {
                      [css.inputError]:
                        errors.description && touched.description,
                    })}
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
                        onChange={date => setStartDate(date)}
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
                    validate={validateTime}
                    className={classnames(css.input, {
                      [css.inputError]: errors.time && touched.time,
                    })}
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
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                    <option value="Business">Business</option>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Party">Party</option>
                    <option value="Sport">Sport</option>
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
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
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
