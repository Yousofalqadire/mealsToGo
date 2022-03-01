import styled from "styled-components/native";

export const TextBody = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
`;
export const DangerText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
`;
export const Lable = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;
export const Caption = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: ${(props) => props.theme.space[2]};
`;
