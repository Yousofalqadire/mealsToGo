import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};
const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const properety = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${properety}: ${value}`;
};
const SpacerView = styled.View`
  ${({ variant }) => variant}
`;
export const Spacer = ({ position, size, Children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{Children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
