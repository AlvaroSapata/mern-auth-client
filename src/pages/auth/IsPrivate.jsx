// Este componente sera un envoltorio de otros componentes para renderizarlos solo si el usuario esta logueado
// Podriamos utilizar algo similar para roles

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";

// HOC => Higher Order Component

function IsPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);

  // Si el usuario esta logueado renderiza el componente children
  if (isLoggedIn) {
    return props.children;
  } else {
    // Si el usuario no esta logueado redirecciona
    // React no nos permite usar navigate en la base del componente asi que tenemos que usar el componente <Navigate/> de react
    return <Navigate to="/"/>
  }
}
export default IsPrivate;
