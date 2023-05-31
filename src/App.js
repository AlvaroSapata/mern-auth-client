import "./App.css";
import Navbar from "./componencts/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Error from "./pages/errors/Error";
import NotFound from "./pages/errors/NotFound";
import Profile from "./pages/Profile";
import IsPrivate from "./pages/auth/IsPrivate";

function App() {
  return (
    <div className="App">

      <Navbar />
    
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<IsPrivate><Profile/></IsPrivate>} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
    
      </Routes>
      
    </div>
  );
}

export default App;
