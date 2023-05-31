import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();

function AuthWrapper(props) {
  //* 1. Los estados o funciones a exportar
  // 1.1 El usuario esta logueado ?
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 1.2 Quien es el usuario ?
  const [user, setUser] = useState(null);
  // Funcion isLoading => la App empieza validando el token
  const [isLoading, setIsLoading] = useState(true)

  // useEffect para cuando el usuario vaya a la app la primera vez
  useEffect(()=>{
    authenticateUser()
  },[])

  // 2.3 Funcion que invoca el servicio de verify para validar el token
  const authenticateUser = async () => {
    
    try {
        
        const response = await verifyService()
        console.log("token validado")
        console.log(response)
        // A partir de este punto el usuario esta logueado
        // usuario logueado
        setIsLoggedIn(true)
        // informacion del usuario
        setUser(response.data.payload)
        // deja de cargar
        setIsLoading(false)
        
    } catch (error) {
        console.log("token no valido o no existe")
        console.log(error)
        // Actualizamos el estado
        setIsLoggedIn(false)
        setUser(null)
        setIsLoading(false)
        
    }
  }

  //* 2. El objeto de contexto que pasaremos
  const passedContext = {
    isLoggedIn,
    user,
    authenticateUser
  };

  if (isLoading){
    return(
        <div className="App">

        <h3> . . . Validando credenciales</h3>
        

        </div>
    )
  }

  //* 3. La renderizacion de la App con el contexto
  return <AuthContext.Provider value={passedContext}>
    {props.children}
  </AuthContext.Provider>;
}

//* Devemos envolver App en index.js

export { AuthContext, AuthWrapper };
