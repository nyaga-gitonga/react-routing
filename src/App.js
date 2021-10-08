import Header from "./components/Header";
import './App.css'
import { BrowserRouter,Route,Redirect} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

function App() {
  const [login, setLogin] = useState(false)
 
  return (
    <BrowserRouter>
     <div className="App">
    <Header /> 
     <button onClick={() =>setLogin(!login)}>{login ? "Logout" : "Login"}</button>
    
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/profile'> 
   <Profile login={login}/>
    </Route>

    <Route path='/post/:id' component={Post} />
    <Route componet={NotFound} />

    </div>
    </BrowserRouter>
   
  );
}

export default App;
