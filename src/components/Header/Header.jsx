import { FaChevronDown } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.upperHeader}>
        <span className={css.title}>Event planner</span>
        <div className={css.langSwitcher}>
          <span className={css.langTitle}>UK</span>
          <FaChevronDown />
        </div>
      </div>
      <div className={css.searchBar}>
        <BiSearch
          style={{ marginLeft: 12, width: 24, height: 24, fill: '#7B61FF' }}
        />
        <span className={css.searchTitle}>Search by keywords</span>
      </div>
    </div>
  );
};
