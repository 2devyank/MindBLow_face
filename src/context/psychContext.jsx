import { createContext, useContext } from "react";


const Psychdata=createContext();

const PsychdataProvider=({children})=>{
    return (
        <Psychdata.Provider value={{}}>
            {children}
        </Psychdata.Provider>
    )
}
export default Psychdata;

export const Psychstate=()=>{
    return useContext(Psychdata);
}