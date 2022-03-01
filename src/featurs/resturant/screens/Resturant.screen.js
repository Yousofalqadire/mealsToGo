/* eslint-disable prettier/prettier */
import React from "react";
import { View, SafeAreaView, StatusBar, FlatList, StyleSheet } from "react-native";
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
const ResturnatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

export const ResturantScreen = () => (
  <SafAerea>
    <>
      <SearchBarConatiner>
        <SearchBar />
      </SearchBarConatiner>
      <ResturnatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
        ]}
        renderItem={() => <ResturantInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </>
  </SafAerea>
);
 const styles = StyleSheet.create({
   listContainer:{
     padding: 8,
   },
 });
