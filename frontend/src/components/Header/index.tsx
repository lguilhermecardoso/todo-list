import { MdLogout } from "react-icons/md";
import { Container } from "./styles";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate()

  function handleLogout() {
    signOut()
    navigate('/')
  }
  return (
    <Container> 
      <h1>ToDo :)</h1>
      <div title="Sair">
        <button onClick={handleLogout}>
          <MdLogout size={24} />
        </button>
      </div>
    </Container>
  )
}