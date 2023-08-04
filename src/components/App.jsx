import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import GeneralPage from '../pages/GeneralPage';
import CreatePage from '../pages/CreatePage';
import EventPage from '../pages/EventPage';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GeneralPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:id" element={<EventPage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
};
