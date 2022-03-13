/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/ResturantInfo.component";
import styled from "styled-components/native";
import { ResturnatContext } from "../../../services/resturant/resturant.context";
import { ActivityIndicator, Colors } from "react-native-paper";

const Indecator = styled.View`
 position: absolute;
 top : 50%;
 left: 50%;
`;
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

export const ResturantScreen = () => {
  const { resturants, isLoading, error} = useContext(ResturnatContext);
  return (
  <SafAerea>
    {isLoading && (
     <Indecator>
        <ActivityIndicator
       size={50}
      animating={true}
      color = {Colors.blue300}
      style={{ marginLeft: -25 }}
      />
     </Indecator>
    )}
    <>
      <SearchBarConatiner>
        <SearchBar />
      </SearchBarConatiner>
      <ResturnatList
        data={resturants}
        renderItem={({ item}) => {
           return (
        <ResturantInfo resturant={item} />
        );}}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer}
      />
    </>
  </SafAerea>
  );
};
 const styles = StyleSheet.create({
   listContainer:{
     padding: 8,
   },
 });
