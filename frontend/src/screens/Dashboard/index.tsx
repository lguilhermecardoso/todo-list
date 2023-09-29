import Board from "../../components/Board";
import Header from "../../components/Header";
import { Container } from "./style";



export default function Dashboard() {

  return (
    <Container>
      <Header />
      <Board />
    </Container>
  )
}