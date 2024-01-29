import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './pages/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;