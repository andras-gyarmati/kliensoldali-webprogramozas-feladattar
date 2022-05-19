import { createContext, useContext, useState } from "react";
import {
  wordList
} from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const HangmanContext = createContext();
const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const maxTips = 9;

const HangmanProvider = ({ children }) => {
  const handleButtonClick = (letter) => {
    const newWrongs = wrongs + 1;
    const newWord = ({ ...word, [letter]: ({ visible: true, missing: false }) });
    if (word[letter]) {
      setWord(newWord);
    } else {
      setWrongs(newWrongs);
    }
    if (newWrongs === maxTips || Object.keys(newWord).every(x => newWord[x].visible)) {
      setButtons(prevValue => prevValue.map(b => ({ label: b.label, disabled: true })));
      setWord(prevValue => {
        const newVal = ({ ...prevValue });
        Object.keys(newVal).forEach(x => {
          if (!newVal[x].visible) {
            newVal[x].visible = true;
            newVal[x].missing = true;
          }
        });
        return newVal;
      });
    }
  };
  const [buttons, setButtons] = useState(Array.from(buttonText).map(b =>
    ({ label: b, disabled: false })
  ));
  const [plainWord, setPlainWord] = useState(wordList[random(0, wordList.length)]);
  const [word, setWord] = useState(Object.assign({}, ...Array.from(plainWord).map(w => ({
    [w]: ({ visible: false, missing: false })
  }))));
  const [wrongs, setWrongs] = useState(0);
  const reset = () => {
    setButtons(Array.from(buttonText).map(b =>
      ({ label: b, disabled: false })
    ));
    const newWord = wordList[random(0, wordList.length)];
    setPlainWord(newWord);
    setWord(Object.assign({}, ...Array.from(newWord).map(w => ({
      [w]: ({ visible: false, missing: false })
    }))));
    setWrongs(0);
  };
  const context = {
    buttons,
    setButtons,
    word,
    setWord,
    plainWord,
    wrongs,
    setWrongs,
    maxTips,
    handleButtonClick,
    reset
  };
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
