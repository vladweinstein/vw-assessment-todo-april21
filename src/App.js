import "./index.css";
import { connect } from "react-redux";

import Form from "./js/components/Form";

const select = (state) => {
  return { todo: state.todo };
};
const ConnectedList = (props) => (
  <ul className="list">
    {props.todo.map((el) => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(select)(ConnectedList);

function App() {
  return (
    <div className="to-do-list-header">
      <h1 className ="form-titles">To-do List</h1>
      <List />
      <h1>Submit To-do item</h1>
      <Form />
    </div>
  );
}

export default App;
