import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { myQuery } from "./__generated__/myQuery";

function App() {
  const { data, error, loading } = useQuery<myQuery>(gql`
    query myQuery {
      todos {
        id
        text
      }
    }
  `);

  if (error) {
    return <>Error! {error.message}</>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <ul>{data && data.todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}</ul>
    </div>
  );
}

export default App;
