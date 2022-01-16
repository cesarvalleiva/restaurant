import { createContext, useState } from "react";
import axios from 'axios'

export const Context = createContext(null);

const BurgerContext = ({children}) => {
    const [info, setinfo] = useState([])

    const obtenerInfo = async (endpoint) => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/bulldog/${endpoint}`)
        setinfo(response.data)
    }

    return ( 
        <Context.Provider value={{info, obtenerInfo}}>
            {children}
        </Context.Provider>
     );
}
 
export default BurgerContext;