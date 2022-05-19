import cn from "classnames";
import Letter from "./Letter";
import { useHangmanContext } from "./HangmanContext";

const Word = () => {
  const { word, plainWord } = useHangmanContext();
  const wordElements = Array.from(plainWord).map((w, index) => {
    return <Letter key={index} visible={word[w].visible} missing={word[w].missing}>{w}</Letter>;
  });
  const won = false;
  return (
    <div id="szo" className={cn({ nyer: won })}>
      {wordElements}
    </div>
  );
};

export default Word;
