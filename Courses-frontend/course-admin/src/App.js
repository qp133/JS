import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Index';
import NotFound from './components/NotFound/Index';
import CourseCreate from './features/CourseCreate';
import CourseEdit from './features/CourseEdit';
import CourseList from './features/CourseList';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/courses'>
            <Route index element = {<CourseList/>} />
            <Route path='create' element ={<CourseCreate />} />
            <Route path=':courseId' element = {<CourseEdit />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
