import React from "react";
import { ResturantScreen } from "../../featurs/resturant/screens/Resturant.screen";
import { createStackNavigator } from "@react-navigation/stack";
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
  return (
    <ResturantsStack.Navigator headerMode="none">
      <ResturantsStack.Screen name="Resturants" component={ResturantScreen} />
    </ResturantsStack.Navigator>
  );
};
