import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { CardType } from "../components/Card";

interface CardContextProps {
  cards: CardType[],
  setCards: Dispatch<SetStateAction<CardType[]>>
}

export const CardContext = createContext<CardContextProps>({
  cards: [],
  setCards: () => {}
})

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<CardType[]>([])

  return (
    <CardContext.Provider value={{
      cards,
      setCards
    }}>
      {children}
    </CardContext.Provider>
  )
}

export function useCard () {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('Cannot use a CardContext here');
  }

  return context
}
