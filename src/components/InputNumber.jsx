import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputStyled, ContainerHome, ButtonStyled } from "./InputNumber.styled";

export const InputNumber = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleInput = () => {
    if (!value) {
      return alert("Please, enter number!");
    }
    navigate(`/${value}`);
  };

  return (
    <ContainerHome>
      <InputStyled
        placeholder="input number"
        name="number"
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
        // onSubmit={handleInput}
      />
      <ButtonStyled type="submit" onClick={handleInput}>
        Go to ticket!
      </ButtonStyled>
    </ContainerHome>
  );
};
