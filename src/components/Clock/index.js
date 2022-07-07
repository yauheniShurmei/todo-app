import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./index.scss";

const Clock = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return (
    <div dark-theme={isDarkTheme ? "dark" : "light"}>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
