import Header from "./components/Header";
import LogIn from "./components/LogIn/LogIn";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <signUp/>

     <BrowserRouter>
      <Routes>
     <Route exact path='/' element={<LandingPage/>} />
     <Route  path='/login' element={<LogIn/>} />
     <Route  path='/signup' element={<signUp/>} />
     </Routes>
     </BrowserRouter>
    
    
    {/* <Header/> */}
    </div>
  );
}

export default App;


