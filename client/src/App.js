import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoutes from "./components/ProtectedRoute";

import Home from './components/homepage';
import UploadForm from './components/UploadForm';
import Display from './components/display';
import Login from "./components/Login"
import SignUp from './components/Signup'
import Logout from './components/Logout';

function App() {
  return (
    <div>
      
      <Router>
          
          <UserAuthContextProvider>
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
          <Route path='/uploadform' element={<ProtectedRoutes><UploadForm /></ProtectedRoutes>} />
          <Route path='/displayform' element={<ProtectedRoutes><Display /></ProtectedRoutes>} />
          <Route path='/logout' element={<Logout/>}></Route>
          </Routes>
          </UserAuthContextProvider>
        </Router>
    </div>
  );
}

export default App;
