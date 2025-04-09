import { useEffect } from "react";
import { useState } from "react";

const GuessedLetters = ({ guessedLetters, puzzle }) => {
    
    return (
        <>
            <h3>{guessedLetters.length > 0 ? "Guessed letters" : 'No guessed letters'}</h3>
            
            <h3>
                {guessedLetters
                    .filter(letter => !puzzle.split("").includes(letter))
                    .join(', ')
                }
            </h3>
        </>
    )
};

export default GuessedLetters;