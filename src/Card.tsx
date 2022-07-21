import classNames from "classnames";
import { FC, useEffect } from "react";
import { Value } from "./App";

interface CardProps extends Value {
    visibileValues: Value[]
    setVisibleValues: (arg: Value[]) => void
    removedValues: Value[]
    equateValues: (arg: Value[]) => void
}


const Card: FC<CardProps> = ({
    value,
    id,
    visibileValues,
    setVisibleValues,
    removedValues,
    equateValues
}) => {

    const className = classNames("card", { "enabled": !visibileValues.find(value => value.id === id) })

    useEffect(() => {
        if (visibileValues.length > 1) equateValues(visibileValues)

    }, [visibileValues, equateValues])

    return <div
        className={className}
        onClick={() => {
            if (!visibileValues.find(value => value.id === id))
                setVisibleValues([...visibileValues, { value, id }])
        }}
    >{visibileValues.find(value => value.id === id) || removedValues.find(value => value.id === id) ? value : 'Hidden'}</div>
}

export default Card;