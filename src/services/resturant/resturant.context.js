import React, { useState, useEffect, createContext, useMemo } from "react";

import { resturantRequest, resturantTransrorm } from "./resturant.service";
import { LocationContext } from "../location/location.context";
export const ResturnatContext = createContext();

export const ResturantContextProvider = ({ children }) => {
  const { location } = React.useContext(LocationContext);
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveResturants = (loc) => {
    setResturants([]);
    setIsLoading(true);
    setTimeout(() => {
      resturantRequest(loc)
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveResturants(locationString);
    }
  }, [location]);
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
