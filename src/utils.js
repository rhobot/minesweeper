const numBombs = 10

/** Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * Based on the size of the board,
 * get the indices where bombs should be placed.
 */
function getBombIndices(size) {
    const indices = new Array(size * size)
    let bombCount = 0

    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            if (bombCount < numBombs) {
                indices[i * 10 + j] = true
                bombCount += 1
            }
        }
    }

    shuffleArray(indices)

    return indices
}

function initializeCell(hasBomb = false) {
    return {
        hasBomb,
        isRevealed: false
    }
}

/**
 * Return a 2D array with randomized bombs.
 */
export function initializeBoard(size) {
    const board = new Array(size)

    for (let i = 0; i < size; ++i) {
        board[i] = new Array(size)
    }

    // Randomize bombs by these st
    const bombIndices = getBombIndices(size)

    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            const hasBomb = bombIndices[i * 10 + j]
            board[i][j] = initializeCell(hasBomb)
        }
    }

    return board
}
