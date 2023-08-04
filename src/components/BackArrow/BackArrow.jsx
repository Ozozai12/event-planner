import { Link } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

import css from './BackArrow.module.css';

export const BackArrow = () => {
  return (
    <Link to="/">
      <div className={css.backButton}>
        <BsArrowLeft style={{ width: 24, height: 24, marginRight: 8 }} />
        <span>Back</span>
      </div>
    </Link>
  );
};
