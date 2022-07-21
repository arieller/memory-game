import { FC } from "react";
import { Value } from "./App";
import Card from "./Card";

interface BoardProps {
    initialValues: Value[]
    visibileValues: Value[]
    setVisibleValues: (arg: Value[]) => void
    removedValues: Value[]
    equateValues: (arg: Value[]) => void
}


const Board: FC<BoardProps> = ({
    initialValues,
    visibileValues,
    setVisibleValues,
    removedValues,
    equateValues
}) => {

    return <div className="board">
        {initialValues.map(({ value, id }) => {
            return <Card
                key={id}
                value={value}
                id={id}
                visibileValues={visibileValues}
                setVisibleValues={setVisibleValues}
                removedValues={removedValues}
                equateValues={equateValues} />
        })}
    </div>
}

export default Board;