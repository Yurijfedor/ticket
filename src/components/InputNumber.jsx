import { useState } from "react";
import { InputStyled, ContainerHome } from "./InputNumber.styled";

export const InputNumber = () => {
  const [value, setValue] = useState("");
  return (
    <ContainerHome>
      <InputStyled placeholder="input number" name="number" />
    </ContainerHome>
  );
};
