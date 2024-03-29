import styled, {css} from "styled-components";
import CustomButton from "../custom-button/CustomButton";

const ShopCustomButtonHoverStyles = css`
  display: flex;
  opacity: 0.85;
`;

const ShopCustomButtonDefaultStyles = css`
  opacity: 0.7;
  display: none;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button{
        opacity: unset ;
      }
    }
  }
`;

export const ShopCustomButton = styled(CustomButton)`
  width: 70%;
  position: absolute;
  top: 255px;
  @media screen and (min-width: 800px){
    ${ShopCustomButtonDefaultStyles}; 
  }
  ${CollectionItemContainer}:hover & {
    ${ShopCustomButtonHoverStyles};
  }
`;