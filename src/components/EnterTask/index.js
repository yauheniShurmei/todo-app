import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./index.scss";

const EnterTask = ({ addToList }) => {
  const [userinput, setUserinput] = useState("");
  const { isDarkTheme } = useContext(ThemeContext);

  const handleChangingInput = (e) => {
    setUserinput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToList(userinput);
      setUserinput("");
    }
  };

  const handleAddToList = () => {
    addToList(userinput);
    setUserinput("");
  };

  return (
    <div className="userinput" dark-theme={isDarkTheme ? "dark" : "light"}>
      <input
        onKeyPress={handleKeyPress}
        placeholder="ENTER TASK"
        onChange={handleChangingInput}
        value={userinput}
        type="text"
      />
      <div className="addbutton" onClick={handleAddToList}>
        ADD
      </div>
    </div>
  );
};

export default EnterTask;
