import { Route, Routes } from 'react-router-dom';
import './App.css';
import CourseList from './components/CourseList/Index';
import Detail from './components/Detail/Index';
import Display from "./components/Display/Index"
function App() {
  return (
    <>
      <Display />
      <Routes>
        <Route path='/courses'>
          <Route index element = {<CourseList/>} />
          <Route path=':courseId' element = {<Detail/>} />
        </Route>
      </Routes>
    </>
  ); 
}

export default App;
