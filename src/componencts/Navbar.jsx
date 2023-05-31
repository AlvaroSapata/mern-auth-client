import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

function Navbar() {

  const navigate = useNavigate()

  const { isLoggedIn, authenticateUser } = useContext(AuthContext)

  const handleLogout = () =>{
    // 1. Borrar el token
    localStorage.removeItem("authToken")

    // 2. validar contra el BE que el token fue borrado
    authenticateUser()

    // 3. Redirigir
    navigate("/")

  }

  return (
    <div className="navBar">
    
    <Link to={"/"}>Home</Link>

    {isLoggedIn && <Link to="/profile">Profile</Link>}
    {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    {!isLoggedIn && <Link to="/auth/signup">Registro</Link>}
    {!isLoggedIn && <Link to="/auth/login">Acceso</Link>}

    </div>
  )
}

export default Navbar