import './Button.css';

export default function Button ({size, color, disabled, children}) {
    return (
        <button
        className={`button ${size} ${color} ${disabled ? 'disabled' : ''}`}
        disabled = {disabled}
        >
        {children}
        </button>
    )
}