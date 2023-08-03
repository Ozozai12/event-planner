import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import classnames from 'classnames';

import { BsArrowLeft } from 'react-icons/bs';

import 'react-datepicker/dist/react-datepicker.css';

import css from './Create.module.css';

export const Create = () => {
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
    <div className={css.container}>
      <Link to="/">
        <div className={css.backButton}>
          <BsArrowLeft style={{ width: 24, height: 24, marginRight: 8 }} />
          <span>Back</span>
        </div>
      </Link>
      <h1 className={css.pageTitle}>Create new event</h1>
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

            <label htmlFor="date" className={css.inputTitle}>
              Select date
            </label>
            <DatePicker
              minDate={new Date()}
              selected={startDate}
              onChange={date => setStartDate(date)}
              className={css.datePicker}
            />

            <label htmlFor="time" className={css.inputTitle}>
              Select time
            </label>
            <Field type="time" name="time" className={css.input} />

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

            <label htmlFor="category" className={css.inputTitle}>
              Select category
            </label>
            <Field component="select" name="category" className={css.select}>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="business">Business</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="party">Party</option>
              <option value="sport">Sport</option>
            </Field>

            <label htmlFor="priority" className={css.inputTitle}>
              Select priority
            </label>
            <Field component="select" name="priority" className={css.select}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
