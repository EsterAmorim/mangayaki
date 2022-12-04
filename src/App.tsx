import './App.css';
import LoginPage from './Pages/login/LoginPage';
import HomePage from './Pages/home/HomePage';
import UserPage from './Pages/users/UserPage';
import RegisterPage from './Pages/register/RegisterPage';
import InteressePage from './Pages/interesse/InteressePage';
import ViewG from './Pages/viewg/ViewG';
import Recentes from './Pages/recentes/Recentes';
import Top from './Pages/top/Top';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/userhome' element={<UserPage/>}/>
      <Route path='/interesse' element={<InteressePage/>} />
      <Route path='/viewg' element={<ViewG/>}/>
      <Route path='/recentes' element={<Recentes/>}/>
      <Route path='/top' element={<Top/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
