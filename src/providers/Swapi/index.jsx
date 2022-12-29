import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [swapi, setSwapi] = useState([]);

  const getSwapi = () => {
    api.get("/").then((res) => {
      setSwapi(res.data.people);
    });
  };

  return (
    <SwapiContext.Provider value={{ swapi, getSwapi, setSwapi }}>
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
