import { useHangmanContext } from "./HangmanContext";

const Result = () => {
  const { wrongs, maxTips } = useHangmanContext();

  return (
    <div id="eredmeny">
      {wrongs}/{maxTips}
    </div>
  );
};

export default Result;
