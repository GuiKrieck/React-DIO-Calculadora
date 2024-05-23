import { InputContainer } from "./styles";

const Input = ({value,id}) => {
    return (
      <InputContainer>
        <input disabled value={value} id={id} />
      </InputContainer>
    );
  }
  
  export default Input;
