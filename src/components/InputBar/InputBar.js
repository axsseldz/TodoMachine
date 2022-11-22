import './InputBar.css'

export default function InputBar({ handleClick, setInputField, inputField }) {

    return (
        <form className="input" onSubmit={(e) => handleClick(e)}>
            <input
                className="inputField"
                value={inputField}
                placeholder='Enter a task'
                type='input'
                onChange={(e) => setInputField(e.target.value)}
            />
            <button
                className="submit-button"
                type="submit"
            >
                Go
            </button>
        </form>
    )
}