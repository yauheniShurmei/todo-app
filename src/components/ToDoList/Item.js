import "./Item.scss";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const Item = ({ item, index, deleteItem, addToDone }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const handlerDeleteItem = (item) => {
    deleteItem(index);
  };

  const handlerAddToDone = () => {
    addToDone(item);
  };

  return (
    <li onClick={handlerDeleteItem} dark-theme={isDarkTheme ? "dark" : "light"}>
      <p>{item}</p>
      <button className="left" onClick={handlerAddToDone}>
        DONE
      </button>{" "}
    </li>
  );
};

export default Item;
