// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userID, setUserID] = useState();

  return (
    <AppContext.Provider value={{ userID, setUserID }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
