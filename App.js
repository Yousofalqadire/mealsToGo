import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStausBar } from "expo-status-bar";
import { ResturantScreen } from "./src/featurs/resturant/screens/Resturant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { ResturantContextProvider } from "./src/services/resturant/resturant.context";
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
export default function App() {
  const [oswaldLoded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantContextProvider>
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
              <Tab.Screen name="Resturant" component={ResturantScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ResturantContextProvider>
      </ThemeProvider>
      <ExpoStausBar />
    </>
  );
}
