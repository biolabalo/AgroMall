import React, { useState } from "react";
export const userContext = React.createContext();

const Store = ({ children }) => {
  const [userData, setUserData] = useState({});
  
  return (
        <userContext.Provider value={[userData, setUserData]}>
          {children}
        </userContext.Provider>
  );
};


export default  Store;