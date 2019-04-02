import React from "react"
import styled from "styled-components"
import { FiArrowRightCircle } from "react-icons/fi"

import { styles } from "../utils"

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: ${styles.colors.yellow};
  border-radius: 1rem;
  cursor: pointer;

  .icon {
    transition: all 0.5s ease-in-out;
    position: absolute;
    margin-left: -10rem;
    opacity: 0;
  }
  &:hover {
    h5 {
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    .icon {
      display: block;
      margin-left: 0rem;
      font-size: 1.4rem;
      opacity: 1;
      transform: scale(1.4);
    }
  }
`

const Button = ({ buttonTitle }) => {
  return (
    <StyledButton>
      <FiArrowRightCircle className="icon" />
      <h5>{buttonTitle}</h5>
    </StyledButton>
  )
}

export { Button }
