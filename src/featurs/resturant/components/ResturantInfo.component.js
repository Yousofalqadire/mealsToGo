import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { SvgXml } from "react-native-svg";
// import { open } from "../../../../assets/open";
// import { star } from "../../../../assets/star";
// using styled liblary to make styled componnents
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const ResturantCard = styled(Card)`
  background-color: white;
  padding: ${(props) => props.theme.space[2]};
`;
const ResturantCardCover = styled(Card.Cover)``;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[2]};
`;
const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
  justify-content: flex-end;
  flex: 1;
  flex-grow: 1;
  width: auto;
  align-items: flex-start;
`;
const Open = styled(View)`
  flex: 1;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
  flex-grow: 1;
  width: auto;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Section = styled(View)`
  flex-direction: row;
`;

export const ResturantInfo = ({ resturant = {} }) => {
  const {
    name = "some resturant name",
    address = "jarsh-alshab street",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    isOpenNow = true,
    raiting = 4,
    isCloasedTemp,
  } = resturant;
  const ratingArry = Array.from(new Array(Math.floor(raiting)));
  return (
    <ResturantCard elevation={5} key={name}>
      <ResturantCardCover source={{ uri: `${photos[0]}` }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Open>
            {isCloasedTemp && <Text>closed now</Text>}
            {isOpenNow && <Icon name="tags" size={25} color="red" />}
          </Open>
          <Rating>
            {ratingArry.map((item, i) => (
              <Icon key={i} name="star" color="#EE9B00" size={20} />
            ))}
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ResturantCard>
  );
};
// const styles = StyleSheet.create({
//   cover: {
//     padding: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     alignItems: "flex-end",
//   },
// });
