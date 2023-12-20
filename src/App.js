import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import BookLayout from './components/BookLayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* The component that we want to show in all the component for the books route is placed inside the element of the parent route
         and the element in the parent route should contain <Outlet/> for the component for the respective path to be rendered */}
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
