import { MouseEventHandler } from "react";
import { ButtonDefault } from "./style";

interface Button {
  onClick: MouseEventHandler,
  buttonName: string,
  color: string
}

const Button = ({ onClick, buttonName, color }: Button) => {
  return (
    <>
      <ButtonDefault color={ color } onClick={ onClick }>{ buttonName }</ButtonDefault>
    </>
  )
}

export default Button;
