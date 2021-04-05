import "./App.css";
import { connect } from "react-redux";

import Form from "./js/components/Form";

const select = (state) => {
  return { articles: state.articles };
};
const ConnectedList = (props) => (
  <ul>
    {props.articles.map((el) => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(select)(ConnectedList);

function App() {
  return (
    <div className="App">
      <h1>Articles List</h1>
      <List />
      <h1>Submit an Article</h1>
      <Form />
    </div>
  );
}

export default App;
