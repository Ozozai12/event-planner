import { BackButton } from 'components/BackButton/BackButton';
import { Form } from './Form/Form';

import css from './Create.module.css';

export const Create = () => {
  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>Create new event</h1>
      <Form />
    </div>
  );
};
