import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <Link to="/" className={css.titleMobile}>
          Event planner
        </Link>
        <div className={css.langSwitcher}>
          <span className={css.langTitle}>UK</span>
          <FaChevronDown />
        </div>
        <div className={css.searchBar}>
          <BiSearch
            style={{
              position: 'absolute',
              left: 12,
              top: 14,
              width: 24,
              height: 24,
              fill: '#7B61FF',
            }}
          />
          <input
            type="text"
            className={css.searchInput}
            placeholder="Search by keywords"
          />
        </div>

        <Link to="/" className={css.title}>
          Event planner
        </Link>
      </div>
    </div>
  );
};
