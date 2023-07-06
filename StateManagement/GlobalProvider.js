import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = React.useState({});
  const [globalState1, setGlobalState1] = React.useState({});
  const [man,setMan]=React.useState(false);
  const [woman,setWoman]=React.useState(false);

  return (
    <GlobalContext.Provider value={{ 
                                   globalState, setGlobalState ,
                                   globalState1, setGlobalState1,
                                   man,setMan,
                                   woman,setWoman}}>
      {children}
    </GlobalContext.Provider>
  );
};
