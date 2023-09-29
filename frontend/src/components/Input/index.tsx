import { InputField, InputWrapper, Label } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
export default function Input({label, ...rest}: InputProps) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputField {...rest} />
    </InputWrapper>
  )
}