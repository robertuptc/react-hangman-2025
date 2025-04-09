import { useState, useEffect } from "react";

const Input = ({ setGuessedLetters, guessedLetters, puzzle }) => {

    const [cleanInput, setCleanInput] = useState('');
    const [guessCount, setguessCount] = useState(0)
    const [puzzleArr, setPuzzleArr] = useState([])

    useEffect(() => {
        setPuzzleArr(puzzle.split(""))
    }, [puzzle]);

    const getUserInput = (e) => {
        e.preventDefault()
        
        if (guessCount == 5) {
            alert('GAME OVER!')
            window.location.reload()
        } else {
            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData)
            const inputLetter = data['input-letter'].toLowerCase()
            
            if (!guessedLetters.includes(inputLetter)) {
                setGuessedLetters([inputLetter, ...guessedLetters ])
                if (!puzzleArr.includes(inputLetter)) {

                    setguessCount(prev => prev + 1)
                }
                
            } else {
                alert(`Letter "${inputLetter}" already guessed!`)
            }
            setCleanInput('')
        }
    }
    console.log("COUNT", guessCount)


    return (
        <>
        <form onSubmit={()=> getUserInput(event)}>
            <input name="input-letter" value={cleanInput} onChange={(e)=> setCleanInput(e.target.value)}></input>
            <button type="submit">Guess</button>
        </form>
        <p>Wrong guesses: {guessCount}</p>
        </>
    )
};

export default Input;