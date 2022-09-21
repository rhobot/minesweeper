import './Button.css'

function Button({cell, onClick}) {
    // unrevealed - show empty.
    if (!cell.isRevealed) {
        return <button className="button button--unrevealed" onClick={onClick} />
    }

    // revealed - show bomb
    if (cell.hasBomb) {
        return <button className="button button--bomb" />
    }

    // TODO revealed - show number adjacent
    return <button className="button" />
}

export default Button