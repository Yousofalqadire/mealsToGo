import React, { useState, createContext } from "react";
import { LocationRequest, LocationTransform } from "./location.service";

export const LocationContext = createContext();
export const LoacationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");
  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setIsLoading(true);
    LocationRequest(searchKeyword.toLowerCase())
      .then(LocationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
