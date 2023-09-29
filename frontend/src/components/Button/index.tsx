import { ButtonWrapper } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}