import Header from "./components/Header";
import LogIn from "./components/LogIn/LogIn";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <div className="App">

     <BrowserRouter>
      <Routes>
     <Route exact path='/' element={<LandingPage/>} />
     <Route  exact path='/login' element={ <LogIn/> } />
     <Route  exact path='/signup' element={ <SignUp/> } />
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;


