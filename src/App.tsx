import { useState } from "react"
import words from "./wordsList.json"
import HangmanWord from "./components/HangmanWord"
import HangmanDrawing from "./components/HangmanDrawing"
import Keybord from "./components/Keybord"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return <div style={{
    maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>win/lose</div>
    <HangmanDrawing />
    <HangmanWord />
    <div style={{ alignSelf: "stretch" }}>
          <Keybord />
    </div>
  </div>
}

export default App
