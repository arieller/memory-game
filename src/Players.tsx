import { FC } from "react";
import { v4 } from "uuid";
import { Player, Scores } from "./App";

interface PlayersProps {
    turn: Player,
    scores: Scores
    winnings: Scores
}

const Players: FC<PlayersProps> = ({
    turn,
    scores,
    winnings
}) => {
    return <div>
        <h1>Players - scores</h1>
        <p>Turn: {turn}</p>
        {Object.entries(scores).map(player => <div key={v4()}>
            {`${player[0]}'s score: ${player[1]}`}
        </div>)}
        {Object.entries(winnings).map(winnings => <div key={v4()}>
            {`${winnings[0]}'s total wins: ${winnings[1]}`}
        </div>)}
    </div>
}

export default Players;