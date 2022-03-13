import React, { useState, useEffect, createContext, useMemo } from "react";

import { resturantRequest, resturantTransrorm } from "./resturant.service";

export const ResturnatContext = createContext();

export const ResturantContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveResturants = () => {
    setIsLoading(true);
    setTimeout(() => {
      resturantRequest()
        .then(resturantTransrorm)
        .then((res) => {
          setIsLoading(false);
          setResturants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retriveResturants();
  }, []);
  return (
    <ResturnatContext.Provider
      value={{
        resturants,
        isLoading,
        error,
      }}
    >
      {children}
    </ResturnatContext.Provider>
  );
};
