import React, { useState } from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import { ResturantInfo } from "../components/ResturantInfo.component";
import { List } from "react-native-paper";
const SafAerea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const ResturantDetails = ({ route }) => {
  const { resturant } = route.params;
  const [breackfastExpended, setBreackfastExpended] = useState(false);
  const [lunchExpende, setLunchExpende] = useState(false);
  const [dinnerExpende, setDinnerExpended] = useState(false);
  const [drinkExpende, setDrinkExpende] = useState(false);
  return (
    <SafAerea>
      <>
        <ResturantInfo resturant={resturant} />
        <ScrollView>
          <List.Section>
            <List.Accordion
              title="Breackfast"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
              expanded={breackfastExpended}
              onPress={() => setBreackfastExpended(!breackfastExpended)}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>

            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
              expanded={lunchExpende}
              onPress={() => setLunchExpende(!lunchExpende)}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-variant" />}
              expanded={dinnerExpende}
              onPress={() => setDinnerExpended(!dinnerExpende)}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="Drink"
              left={(props) => <List.Icon {...props} icon="cup" />}
              expanded={drinkExpende}
              onPress={() => setDrinkExpende(!drinkExpende)}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
              <List.Item title="Second item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </>
    </SafAerea>
  );
};
