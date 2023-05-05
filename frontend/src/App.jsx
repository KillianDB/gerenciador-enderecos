import './App.css';
import UserRegisterScreen from './screens/UserRegisterScreen';
import UsersScreen from './screens/UsersScreen';
import {Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path='/' element={<UsersScreen/>}/>
      <Route path='/registro' element={<UserRegisterScreen/>}/>
    </Routes>
  );
  
}

export default App;
