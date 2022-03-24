import React from "react";
import { ResturantScreen } from "../../featurs/resturant/screens/Resturant.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ResturantDetails } from "../../featurs/resturant/screens/ResturantDetails.screen";
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
  return (
    <ResturantsStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <ResturantsStack.Screen name="Resturants" component={ResturantScreen} />
      <ResturantsStack.Screen
        name="ResturantDetails"
        component={ResturantDetails}
      />
    </ResturantsStack.Navigator>
  );
};
