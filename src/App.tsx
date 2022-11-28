import './App.css';
import LoginPage from './Pages/login/LoginPage';
import HomePage from './Pages/home/HomePage';
import RegisterPage from './Pages/register/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
