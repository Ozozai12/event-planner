import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import GeneralPage from '../pages/GeneralPage';
import CreatePage from '../pages/CreatePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GeneralPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
