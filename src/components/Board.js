import { useState } from 'react'
import { cloneDeep } from 'lodash'

import Button from './Button'
import './Board.css'
import { initializeBoard } from '../utils'

const size = 9

function Board() {
    const [isGameOver, setIsGameOver] = useState(false)
    const [board, setBoard] = useState(initializeBoard(size))

    /**
     * If the cell is not revealed, reveal it.
     */
    function updateCell(x, y) {
        const cell = cloneDeep(board[x][y])
        cell.isRevealed = true

        const copiedBoard = cloneDeep(board)
        copiedBoard[x][y] = cell
        
        if (cell.hasBomb) {
            setIsGameOver(true)
        }

        setBoard(copiedBoard)
    }

    function tryAgain() {
        setIsGameOver(false)
        setBoard(initializeBoard(size))
    }

    return <div className="placeholder">
        <header className="header">
            Minesweeper
        </header>
        <div>
            {[...Array(size)].map((_, x) => {
                return <div key={x} className="row">
                    {[...Array(size)].map((_, y) => {
                        return <Button key={`${x}-${y}`} cell={board[x][y]} onClick={() => isGameOver ? undefined : updateCell(x, y)} />
                    })}
                </div>
            })}

            {isGameOver &&
                <div className="game-over">
                    <span>Game over!</span>
                    <button onClick={tryAgain}>Try again</button>
                </div>}
        </div>
    </div>
}

export default Board