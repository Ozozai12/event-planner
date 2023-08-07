import { Link } from 'react-router-dom';

import { AiOutlinePlus } from 'react-icons/ai';

import css from './CreateButton.module.css';

export const CreateButton = () => {
  return (
    <Link to="create" className={css.serviceButton}>
      <AiOutlinePlus style={{ width: 24, height: 24, fill: '#fff' }} />
      <span className={css.buttonName}>Add new event</span>
    </Link>
  );
};
