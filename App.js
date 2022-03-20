import React from "react";
import { StatusBar as ExpoStausBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ResturantContextProvider } from "./src/services/resturant/resturant.context";
import { LoacationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigator/Index";

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
        <LoacationContextProvider>
          <ResturantContextProvider>
            <Navigation />
          </ResturantContextProvider>
        </LoacationContextProvider>
      </ThemeProvider>
      <ExpoStausBar />
    </>
  );
}
