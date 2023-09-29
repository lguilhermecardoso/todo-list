import { ChangeEvent, useState } from "react";
import { Container, FormWrapper, Title } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { signIn, isLogin } = useAuth()
  const navigate = useNavigate()

  if (isLogin) {
    navigate('/dashboard')
  }


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    setIsLoading(true)
    await signIn(login, password)
    navigate('/dashboard')
    setIsLoading(false)
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Todo :)</Title>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              label="Login"
              placeholder="Informe seu login"
              name="login"
              value={login}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
            />
          </div>
          <div>
            <Input
              label="Senha"
              placeholder="Informe sua senha"
              type="password"
              name="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </Button>
          </div>
        </form>
      </FormWrapper>
    </Container>
  )
}