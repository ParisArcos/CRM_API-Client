import React, { useState, createContext } from "react";

export const CRMContext = createContext([{}, () => {}]);

export const CRMprovider = (props) => {
  const [auth, setAuth] = useState({
    token: "",
    auth: false,
  });

  return (
    <CRMContext.Provider value={[auth, setAuth]}>
      {props.children}
    </CRMContext.Provider>
  );
};
