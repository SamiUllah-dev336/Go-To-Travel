import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = React.useState({});
  const [globalState1, setGlobalState1] = React.useState({});
  const [origin,setOrigin]=React.useState({});
  const [destination,setDestination]=React.useState({});

  return (
    <GlobalContext.Provider value={{ 
                                   globalState, setGlobalState ,
                                   globalState1, setGlobalState1,
                                   origin,setOrigin,
                                   destination,setDestination}}>
      {children}
    </GlobalContext.Provider>
  );
};
