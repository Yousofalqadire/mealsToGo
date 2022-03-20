import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ResturantsNavigator } from "./Resturants.Navigator";

const Tab = createBottomTabNavigator();

const SafArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const Map = () => (
  <SafArea>
    <Text>Map </Text>
  </SafArea>
);
export const Settings = () => (
  <SafArea>
    <Text>Settings</Text>
  </SafArea>
);
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Resturant") {
              iconName = "md-restaurant";
            } else if (route.name === "Settings") {
              iconName = "md-settings";
            } else if (route.name === "Map") {
              iconName = "md-map";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Resturant" component={ResturantsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
