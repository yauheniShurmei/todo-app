import Item from "./Item";
import "./index.scss";

const DoneList = ({ done, deleteDone }) => {
  return (
    <ul>
      <h1 className="done">DONE</h1>
      {done.map((item, index) => (
        <Item key={index} index={index} item={item} deleteDone={deleteDone} />
      ))}
    </ul>
  );
};

export default DoneList;
