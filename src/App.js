import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuState from './context/menu/MenuState';

import UiShell from './layout/UiShell/UiShell';
import Home from './pages/Home';
import Edit from './pages/Edit';

import './App.css';

function App() {
  return (
    <MenuState>
      <BrowserRouter>
        <UiShell>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/edit" element={<Edit />} />
          </Routes>
        </UiShell>
      </BrowserRouter>
    </MenuState>
  );
}

export default App;
