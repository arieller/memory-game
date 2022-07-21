import { FC } from 'react';

interface MenuProps {
    startNewGame: (arg: boolean) => void
}

const Menu: FC<MenuProps> = ({
    startNewGame
}) => {
    return <div><button onClick={() => startNewGame(true)}>Reset game!</button></div>
}

export default Menu;