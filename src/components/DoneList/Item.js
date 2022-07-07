import "./Item.scss";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const Item = ({ item, deleteDone, index }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const handlerDeleteDone = () => {
    deleteDone(index);
  };

  return (
    <li onClick={handlerDeleteDone} dark-theme={isDarkTheme ? "dark" : "light"}>
      <p>{item}</p> <span>✔</span>
    </li>
  );
};

export default Item;
