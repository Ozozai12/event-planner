import { BiFilterAlt } from 'react-icons/bi';

import css from './FilterButton.module.css';
import { useState } from 'react';

import useHover from 'hooks/useHover';
import { useMatchMedia } from 'hooks/use-match-media';

const categories = [
  {
    category: 'All',
  },
  {
    category: 'Art',
  },
  {
    category: 'Music',
  },
  {
    category: 'Business',
  },
  {
    category: 'Conference',
  },
  {
    category: 'Workshop',
  },
  {
    category: 'Party',
  },
  {
    category: 'Sport',
  },
];

export const FilterButton = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [hoverRef, isHovered] = useHover();
  const { isMobile } = useMatchMedia();

  const filterItemsByCategory = category => {
    props.onSelect(category);
  };
  return (
    <>
      <div
        className={css.buttonContainer}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        style={
          isMobile
            ? {
                borderBottomRightRadius: isOpen ? 0 : 8,
                borderBottomLeftRadius: isOpen ? 0 : 8,
                width: isOpen ? 148 : 56,
                transform: isOpen ? 'translateX(60%)' : 'none',
              }
            : {
                borderBottomRightRadius: isOpen ? 0 : 8,
                borderBottomLeftRadius: isOpen ? 0 : 8,
              }
        }
        ref={hoverRef}
      >
        <span
          className={css.buttonName}
          style={
            isMobile
              ? { display: isOpen ? 'block' : 'none' }
              : { display: 'block' }
          }
        >
          {category === 'All' ? 'Category' : category}
        </span>
        <BiFilterAlt
          style={{
            width: 24,
            height: 24,
            fill: isHovered ? '#7b61ff' : '#3F3F3F',
          }}
        />
        {isOpen && (
          <ul className={css.dropdownMenu}>
            {categories.map(item => {
              return (
                <li
                  className={css.menuItem}
                  key={item.category}
                  onClick={() => {
                    setCategory(item.category);
                    filterItemsByCategory(item.category);
                  }}
                >
                  <span>{item.category}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
