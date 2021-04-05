import { useState } from "react";
import { addTodo } from "../actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
}

const ConnectedForm = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo({ title });
    setTitle("");
  };

  return (
    <form className="list" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Type your to-do's here!</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </div>
      <button type="SUBMIT">Add to your to-do list</button>
    </form>

  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
