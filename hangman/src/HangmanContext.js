import { createContext, useContext, useState } from "react";
import {
  wordList
} from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const HangmanContext = createContext();
const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const HangmanProvider = ({ children }) => {
  const handleButtonClick = (letter) => {
    if (word[letter])
      setWord(prevValue => ({ ...prevValue, [letter]: ({ visible: true, missing: false }) }));
  };
  const [buttons, setButtons] = useState(Array.from(buttonText).map(b =>
    ({ label: b, disabled: false })
  ));
  const [plainWord, setPlainWord] = useState(wordList[random(0, wordList.length)]);
  const [word, setWord] = useState(Object.assign({}, ...Array.from(plainWord).map(w => ({
    [w]: ({ visible: false, missing: false })
  }))));
  const reset = () => setButtons(null);
  const context = { buttons, setButtons, word, setWord, plainWord, handleButtonClick, reset };
  console.log(plainWord);
  console.log(word);

  return (
    <HangmanContext.Provider value={context}>
      {children}
    </HangmanContext.Provider>
  );
};

export const useHangmanContext = () => useContext(HangmanContext);

export default HangmanProvider;
