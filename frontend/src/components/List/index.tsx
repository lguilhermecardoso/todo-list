import { Container, CreateCardArea, CreateCardContainer, Footer } from "./style";

import { MdAdd, MdCancel } from 'react-icons/md'

import Card from '../Card'
import { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import { Label } from "../Card/style";

interface ListProps {
  data: {
    title: string
    creatable?: boolean
  }
}

export default function List({data}: ListProps) {

  const [cards, setCards] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [openNewCard, setOpenNewCard] = useState(false)


  async function handleSaveCard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const card = {
      titulo: title,
      conteudo: content,
      lista: 'ToDo'
    }
    try {
      const response = await api.post('/cards', card)
      if (response) {
        setCards([...cards, response.data])
      }
    } catch (error) {
      console.log(error)
    }
    setTitle('')
    setContent('')
    setOpenNewCard(false)
  }
  async function getCards() {
    const response = await api.get('/cards')
    const filterCards = response.data.filter((card) =>{ 
      return card.lista === data.title
    })
    setCards(filterCards)
  }

  useEffect(() => {
    console.log('useEffect dispath?')
    getCards()
  }, [setCards])

  return (
    <Container done={data.title === 'Done'}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button onClick={() => setOpenNewCard(true)} type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>
      {data.title === 'ToDo' && (
        <>
          {openNewCard && (
            // @ TODO:
            // Passar card para um único componente onde seja possível criar e editar no mesmo evitando assim duplicidade de código
            // não ferindo principio DRY!
            <CreateCardArea>
              <CreateCardContainer>
                <form onSubmit={handleSaveCard}>
                  <header>
                  <Label color="#F2C94C" />
                    <input
                      placeholder="Informe o titulo da tarefa"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </header>
                  <div>
                    <textarea
                      cols={33}
                      rows={6}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Informe a descrição da tarefa"
                    />
                  </div>
                  <Footer>
                    <div><MdCancel onClick={() => setOpenNewCard(false)} size={24} color="#DE3163" /></div>
                    <button type="submit"><MdAdd size={24} color="#6FCF97" /></button>
                  </Footer>
                </form>
              </CreateCardContainer>
            </CreateCardArea>
          )}
        </>
      )}
      

      <ul>
        {cards.map(card => (
          <Card key={card.id} data={card} getCards={getCards} />
        ))}
      </ul>
    </Container>
  )
}