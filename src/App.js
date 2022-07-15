import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Layout from './components/Layout/Layout';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BookList />} />
        <Route path="books" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
