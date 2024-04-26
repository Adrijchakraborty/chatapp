import React, {  createContext, useContext, useState } from 'react';

const Global = createContext();

export const useStateContext = () =>{
    return useContext(Global);
}

const Responsive = ({children}) => {
    const [resp,setResp] = useState(false);

    return (
        <Global.Provider value={{resp,setResp}}>
            {children}
        </Global.Provider>
      )
}

export default Responsive











  

