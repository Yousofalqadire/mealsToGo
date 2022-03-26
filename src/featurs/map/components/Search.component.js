import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchBarConatiner = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: center;
`;
const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 75px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarConatiner>
      <SearchBar
        placeholder="search for location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarConatiner>
  );
};
