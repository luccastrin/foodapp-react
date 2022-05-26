import { InputDefault } from "./style";

interface Input {
  placeholder: string
}

export const Input = ({ placeholder }: Input) => {
  return (
    <>
      <InputDefault placeholder={ placeholder } />
    </>
  )
}