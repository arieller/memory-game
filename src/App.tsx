import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';
import Board from './Board';
import Players from './Players';
import Menu from './Menu';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]

export interface Value { value: number, id: string }

export enum Player { player1 = 'player1', player2 = 'player2' }

export interface Scores {
  [Player.player1]: number
  [Player.player2]: number
}

const App = () => {

  const [initialValues, setInitialValues] = useState<Value[]>([])
  const [visibileValues, setVisibileValues] = useState<Value[]>([])
  const [removedValues, setRemovedValues] = useState<Value[]>([])
  const [newGame, startNewGame] = useState<boolean>(true)


  const [scores, setScores] = useState<Scores>({ [Player.player1]: 0, [Player.player2]: 0 })
  const [winnings, setWinnings] = useState<Scores>({ [Player.player1]: 0, [Player.player2]: 0 })
  const [turn, setTurn] = useState<Player>(Player.player1)

  const nextTurn = (turn: Player) => {
    if (turn === Player.player1) setTurn(Player.player2)
    if (turn === Player.player2) setTurn(Player.player1)
  }

  const equateValues = (valuesArray: Value[]) => {
    const valuesSet = new Set(valuesArray.map(value => value.value))

    if (valuesSet.size === 1) {
      setRemovedValues([...removedValues, ...valuesArray])
      setScores({ ...scores, [turn]: scores[turn] + 1 })
    }
    nextTurn(turn)
    setVisibileValues([])
  }

  useEffect(() => {
    setInitialValues(values.map(value => { return { value, id: v4() } }))
  }, [])

  useEffect(() => {
    if (scores.player1 + scores.player2 === 8) {
      if (scores.player1 > scores.player2) setWinnings({ ...winnings, [Player.player1]: winnings[Player.player1] + 1 })
      else if (scores.player2 > scores.player1) setWinnings({ ...winnings, [Player.player2]: winnings[Player.player2] + 1 })
      startNewGame(true)
    }
  }, [scores])


  useEffect(() => {
    setVisibileValues([])
    setRemovedValues([])
    setTurn(Player.player1)
    setScores({ [Player.player1]: 0, [Player.player2]: 0 })
    startNewGame(false)
  }, [newGame])


  return (
    <div className="App">
      <Players
        turn={turn}
        scores={scores}
        winnings={winnings} />
      <Board
        initialValues={initialValues}
        visibileValues={visibileValues}
        setVisibleValues={setVisibileValues}
        removedValues={removedValues}
        equateValues={equateValues} />
      <Menu
        startNewGame={startNewGame} />
    </div>
  );
}

export default App;
