import React, { useContext } from "react";
import { Button, Space } from "antd";
import {
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import TodoItem from "../todo-item";

function TodoList({ todos, onDeletedTodo, onCompleteTodoStatusChanged }) {
  return todos.map((todo) => (
    <TodoItem
      key={todo.code}
      {...todo}
      onDeletedTodo={onDeletedTodo}
      onCompleteTodoStatusChanged={onCompleteTodoStatusChanged}
    />
  ));
}

export default TodoList;
