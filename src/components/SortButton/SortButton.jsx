import { LiaSlidersHSolid } from 'react-icons/lia';

import css from './SortButton.module.css';

export const SortButton = () => {
  return (
    <div className={css.serviceButton}>
      <span className={css.buttonName}>Sort by</span>
      <LiaSlidersHSolid style={{ width: 24, height: 24, fill: '#3F3F3F' }} />
    </div>
  );
};
