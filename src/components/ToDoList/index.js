import Item from "./Item";
import "./index.scss";

const ToDoList = ({ items, deleteItem, addToDone }) => {
  return (
    <ul>
      <h1 className="todo">TO DO</h1>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
          addToDone={addToDone}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
