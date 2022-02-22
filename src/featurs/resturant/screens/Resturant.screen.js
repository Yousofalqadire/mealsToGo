import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/ResturantInfo.component";
import styled from "styled-components/native";

const SafAerea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarConatiner = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space[2]};
`;
const ResturantContainer = styled(View)`
  flex: 1;
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
`;
export const ResturantScreen = () => (
  <SafAerea>
    <>
      <SearchBarConatiner>
        <SearchBar />
      </SearchBarConatiner>
      <ResturantContainer>
        <ResturantInfo />
      </ResturantContainer>
    </>
  </SafAerea>
);
