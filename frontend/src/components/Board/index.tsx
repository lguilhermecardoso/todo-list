import { Container } from "./style";

import List from '../List'

const lists = [
  {
    id: 0,
    title: 'ToDo',
    creatable: true
  },
  {
    id: 1,
    title: 'Doing'
  },
  {
    id: 3,
    title: 'Done'
  },
]

export default function Board() {
  return (
    <Container>
      {lists.map(list => (
        <List key={list.id} data={list} />
      ))}
    </Container>
  )
}