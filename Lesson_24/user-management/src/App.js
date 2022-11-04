import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserAdd from './features/UserAdd';
import UserEdit from './features/UserEdit';
import UserList from './features/UserList';
import NotFound from './components/NotFound'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/users'>
                    <Route index element={<UserList/>}/>
                    <Route path='create' element={<UserAdd/>}/>
                    <Route path=':userId' element={<UserEdit/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer />
        </>
        // <div className="App">
        //     < UserList />
        // </div>
    );
}

export default App;
