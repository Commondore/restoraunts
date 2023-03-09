import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { List } from './pages/List';
import { Restoraunt } from './pages/Restoraunt';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restoraunts">
          <Route index element={<List />} />
          <Route path=":id" element={<Restoraunt />} />
        </Route>
        <Route path="*" element={<h1>Не найдено</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
