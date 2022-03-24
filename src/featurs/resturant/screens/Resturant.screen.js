/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { TouchableOpacity, SafeAreaView, StatusBar, FlatList, StyleSheet } from "react-native";
import { ResturantInfo } from "../components/ResturantInfo.component";
import styled from "styled-components/native";
import { ResturnatContext } from "../../../services/resturant/resturant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/Search.component";

const Indecator = styled.View`
 position: absolute;
 top : 50%;
 left: 50%;
`;
const SafAerea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;


const ResturnatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

export const ResturantScreen = ({navigation}) => {
  const { resturants, isLoading} = useContext(ResturnatContext);
  return (
  <SafAerea>
    {isLoading && (
     <Indecator>
        <ActivityIndicator
       size={50}
      animating={true}
      color = {Colors.blue300}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ marginLeft: -25 }}
      />
     </Indecator>
    )}
    <>
     <Search />
      <ResturnatList
        data={resturants}
        renderItem={({ item}) => {
           return (
             <TouchableOpacity onPress={() => navigation.navigate("ResturantDetails",
             {resturant: item})}>
        <ResturantInfo resturant={item} />
        </TouchableOpacity>
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
