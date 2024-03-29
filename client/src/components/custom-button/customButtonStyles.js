import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.isGoogleSignIn
    ? googleSignInStyles
    : props.inverted
    ? invertedButtonStyles
    : buttonStyles;
};

export const CustomButtonContainer = styled(Link)`
  min-width: 165px;
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: $font-family;
  font-weight: bolder;
  cursor: pointer;

  a {
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  ${getButtonStyles}
`;
