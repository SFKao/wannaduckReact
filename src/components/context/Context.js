import { createContext } from "react";

export const Context = createContext(null);

const contextProvider = () =>{
    return Context;
}

export default contextProvider