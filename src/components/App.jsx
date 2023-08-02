import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { General } from './General';
import { Create } from './Create';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<General />} />
        <Route path="/create" element={<Create />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
