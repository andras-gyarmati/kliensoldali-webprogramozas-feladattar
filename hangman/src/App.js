import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import HangmanProvider from "./HangmanContext";

const App = () => {
  return (
    <>
      <h1>Hangman</h1>
      <HangmanProvider>
        <Word />
        <Buttons />
        <Result />
        <Hangman />
      </HangmanProvider>
    </>
  );
};

export default App;
