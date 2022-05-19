import { useHangmanContext } from "./HangmanContext";

const Buttons = () => {
  const { buttons, setButtons, handleButtonClick } = useHangmanContext();

  function onButtonClick(button) {
    setButtons(prevValue => prevValue.map(b => b.label === button.label ? { label: button.label, disabled: true } : b));
    handleButtonClick(button.label);
  }

  const buttonElements = buttons.map(b => {
    return <button key={b.label} onClick={() => onButtonClick(b)} disabled={b.disabled}>{b.label}</button>;
  });
  return (
    <div id="betuk">
      {buttonElements}
    </div>
  );
};

export default Buttons;
