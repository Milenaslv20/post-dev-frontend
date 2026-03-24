import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Post from './pages/Post';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
