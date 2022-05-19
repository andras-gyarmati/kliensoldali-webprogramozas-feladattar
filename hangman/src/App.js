import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import HangmanProvider from "./HangmanContext";

const App = () => {
  // Application state (data)
  const maxTips = 9;
  const word = "alma";
  const tips = ["a", "l", "s", "s", "s", "s", "s", "s", "s"];

  // Event handlers

  // Computed values

  return (
    <>
      <h1>Hangman</h1>
      <HangmanProvider>
        <Word />
        <button>New game</button>
        <Buttons />
        <Result />
        <Hangman />
      </HangmanProvider>
    </>
  );
};

export default App;
