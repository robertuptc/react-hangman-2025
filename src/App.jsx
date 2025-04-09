import { useState, useEffect } from 'react';
import './App.css';
// Components
import DisplayWord from './components/DisplayWord';
import Input from './components/Input';
// Data
import wordArr from '../src/data/data-seed';


function App() {
  
  const [puzzle, setPuzzle] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([])


  useEffect(()=> {
    const randomWord = wordArr[generateRandomNum()]
    setPuzzle(randomWord)
  }, [])



  const generateRandomNum = () => Math.floor(Math.random() * (wordArr.length - 0))


  return (
    <>
      <h1>Hangman</h1>
      <DisplayWord 
        puzzle={puzzle} 
        guessedLetters={guessedLetters} 
        setGuessedLetters={setGuessedLetters}
      />
      
      <Input 
        setGuessedLetters={setGuessedLetters}
        guessedLetters={guessedLetters} 
        puzzle={puzzle}
      />
    </>

  )
}

export default App;
