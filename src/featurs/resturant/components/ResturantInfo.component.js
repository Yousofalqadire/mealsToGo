import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacer } from "../../../component/Spacer.component";
import {
  Caption,
  DangerText,
  Lable,
} from "../../../component/text/Text.styles";

// import { SvgXml } from "react-native-svg";
// import { open } from "../../../../assets/open";
// import { star } from "../../../../assets/star";
// using styled liblary to make styled componnents

const ResturantCard = styled(Card)`
  background-color: white;
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
`;
const ResturantCardCover = styled(Card.Cover)``;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
  justify-content: flex-start;
  flex: 1;
  flex-grow: 1;
  width: auto;
  align-items: flex-start;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
const Section = styled(View)`
  flex-direction: row;
  justify-content: center;
`;
const Brand = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ResturantInfo = ({ resturant = {} }) => {
  const {
    name = "some resturant name",
    address = "jarsh-alshab street",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    isOpenNow = true,
    raiting = 4,
    isCloasedTemp = true,
  } = resturant;
  const ratingArry = Array.from(new Array(Math.floor(raiting)));
  return (
    <ResturantCard elevation={5} key={name}>
      <ResturantCardCover source={{ uri: `${photos[0]}` }} />
      <Info>
        <Lable>{name}</Lable>
        <Section>
          <Rating>
            {ratingArry.map((item, i) => (
              <Icon key={i} name="star" color="#EE9B00" size={20} />
            ))}
          </Rating>
          <Spacer position="left" size="large" />

          <SectionEnd>
            {isCloasedTemp && (
              <DangerText variant="error">closed now</DangerText>
            )}
            <Spacer position="left" size="large" />
            <Brand source={{ uri: icon }} />
            <Spacer position="left" size="large" />
            {isOpenNow && <Icon name="tags" size={25} color="red" />}
          </SectionEnd>
        </Section>
        <Caption>{address}</Caption>
      </Info>
    </ResturantCard>
  );
};
