import { createContext, useState } from "react";

export const Context = createContext(null);

const BurgerContext = ({children}) => {
    const [burger, setBurger] = useState('chau')
    return ( 
        <Context.Provider value={{burger}}>
            {children}
        </Context.Provider>
     );
}
 
export default BurgerContext;