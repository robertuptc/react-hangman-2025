import { useState } from "react";
import { useEffect } from "react"
// Components
import GuessedLetters from "./GuessedLetters";

const DisplayWord = ({ puzzle, guessedLetters }) => {
    
    const [dashedWord, setDashedWord] = useState([])

    useEffect(()=> {
        checkLetter(puzzle)

        const dashes = puzzle.replace(/\w/g, '_').split('')
        setDashedWord(dashes)
        
    }, [puzzle])
    
    
    useEffect(()=> {
        checkLetter(guessedLetters)
    }, [guessedLetters])


    const checkLetter = (lettersArr) => {
        if (lettersArr.length > 0) {
            console.log("LIST>>>>", lettersArr[0])
            let inputLetter = lettersArr[0]
            
            let newDashedWord = [...dashedWord]
            for (let i = 0; i < puzzle.length; i++) {
                if (inputLetter === puzzle[i]) {
                    console.log(puzzle[i])

                    newDashedWord[i] = puzzle[i]
                    console.log("new", newDashedWord)
                    
                }
            }
            setDashedWord(newDashedWord)
        }
    };


    return (
        <>
            <h1>{puzzle ? dashedWord.join(' ') : 'Refresh Page'}</h1>
            <GuessedLetters guessedLetters={guessedLetters} puzzle={puzzle}/>
        </>
    )
}

export default DisplayWord;