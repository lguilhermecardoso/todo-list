/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdAdd, MdArrowBack, MdArrowForward, MdCancel, MdDelete, MdEdit } from "react-icons/md";
import { Container, Footer, Label } from "./style"
import api from "../../services/api";
import { useState } from "react";
import { CreateCardArea, CreateCardContainer } from "../List/style";

export type CardType = {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}
interface CardProps {
  getCards? :any;
  data: {
    id: string;
    titulo: string;
    conteudo: string;
    lista: string;
  }
}
export default function Card({data, getCards }: CardProps) {
  const [iseEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  function getCardColor(lista: string) {
    switch(lista) {
      case 'Novo':
        return '#189AB4'
      case 'ToDo':
        return '#F2C94C'
      case 'Doing':
        return '#6FCF97'
      case 'Done':
        return '#2F80ED'
      default:
        return '#189AB4'
    }
  }

  async function handleEditCard(data: CardType) {
    setIsEditing(true)
    setContent(data.conteudo)
    setTitle(data.titulo)
  }

  async function sendIsEditing(data: CardType) {
    try {
      const newCard = {
        id: data.id,
        titulo: title,
        conteudo: content,
        lista: data.lista
      }
      const response = await api.put(`/cards/${data.id}`, newCard)
      if (response) {
        getCards()
      }
      } catch(error) {
        console.log(error)
      }
  }

  async function handleDeleteCard(id: string) {
    const response = await api.delete(`/cards/${id}`)
    if (response) {
      getCards()
    }
  }

  async function moveCard(card: CardType, direction: 'left' | 'right') {
    let newDirection = ''
    if (direction === 'right') {
      switch(card.lista) {
        case 'ToDo':
          newDirection = 'Doing'
          break
        case 'Doing':
          newDirection = 'Done'
          break
        default:
          break
      }
    } else if (direction === 'left') {
      switch(card.lista) {
        case 'Done':
          newDirection = 'Doing'
          break
        case 'Doing':
          newDirection = 'ToDo'
          break
        default:
          break
      }
    }
    const newCard = {
      id: card.id,
      titulo: card.titulo,
      conteudo: card.conteudo,
      lista: newDirection
    }
    const response = await api.put(`/cards/${card.id}`, newCard)

    if (response) {
      getCards()
      window.location.reload()
    }
    
  }
  return (
    <>
    {iseEditing ? (
      <CreateCardArea>
      <CreateCardContainer>
        <form>
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
            <div><MdCancel onClick={() => setIsEditing(false)} size={24} color="#DE3163" /></div>
            <button onClick={() => sendIsEditing(data)}><MdAdd size={24} color="#6FCF97" /></button>
          </Footer>
        </form>
      </CreateCardContainer>
    </CreateCardArea>
      ) : 
      (
        <Container>
          <span onClick={() => handleEditCard(data)}><MdEdit size={24} color="#189AB4" /></span>
          <header>
            <Label color={getCardColor(data.lista)} />
            <span>{data.titulo}</span>
          </header>
          <p>
            {data.conteudo}
          </p>
          <Footer>
            {data.lista !== 'ToDo' ? <div><MdArrowBack onClick={() => moveCard(data, 'left')} size={24} color="#189AB4" /></div> : <div></div>}
            <div><MdDelete onClick={() => handleDeleteCard(data.id)} size={24} color="#DE3163" /></div>
            {data.lista !== 'Done' ? <div><MdArrowForward onClick={() => moveCard(data, 'right')} size={24} color="#189AB4" /></div> : <div></div>}
          
          </Footer>
      </Container>
      )
    }
    </>
  )
}