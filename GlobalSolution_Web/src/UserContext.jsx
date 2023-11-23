import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: null,
    valorMaxGlicemia: null,
    valorMinGlicemia: null,
  });

  const updateUserContext = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};