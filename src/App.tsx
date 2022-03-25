import React, { ReactNode, useEffect, useState } from "react";
import "./App.css";

export interface TodoList {
  task: string;
  deadline: number;
  status: boolean;
}
type ArrTodo = Array<TodoList>;
let x = [
  {
    task: "Hell",
    deadline: 10,
    status: true,
  },
];

const AddTodo: React.FC<any> = ({ todoInput }) => {
  const [todoList, todoListSet] = useState<TodoList[]>([...x, ...todoInput]);
  // todoListSet(todoInput);
  return <div>{JSON.stringify(todoList)}</div>;
};
function AddTodoVar({ todoInput }: { todoInput: any }) {
  const [todoList, todoListSet] = useState<TodoList[]>(x);
  useEffect(() => {
    todoListSet([...todoInput, ...x]);
  }, []);

  return <div>{JSON.stringify(todoList)}</div>;
}

function App() {
  const now = [
    {
      task: "olo",
      deadline: 1,
      status: false,
    },
  ];
  return (
    <div className="App">
      <AddTodo todoInput={now} />
      <AddTodoVar todoInput={now} />
    </div>
  );
}

export default App;
