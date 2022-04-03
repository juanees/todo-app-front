import React, { useState, useEffect } from "react";
import "./index.css";
import { Row, Col, Spin, notification, Modal, Result, Button } from "antd";
import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import TodoHeader from "../todo-header";
import TodoList from "../todo-list";
import TodoService from "../../services/todo-service";

function Todos() {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    setTodos({ loading: true });

    // setTodos({
    //   data: [
    //     {
    //       code: "e074b1b8-a624-4c48-9456-4258533be357",
    //       title: "Todo-app api",
    //       description: "Finish this project",
    //       completed: false,
    //       created_at: "2022-03-25T13:31:29.8795569-03:00",
    //     },
    //     {
    //       code: "4c64eec0-8e82-40ee-b682-f3d23f3608ae",
    //       title: "Project Idea",
    //       description: "Find a project idea to practice and learn",
    //       completed: true,
    //       created_at: "2022-03-25T13:31:29.8879435-03:00",
    //     },
    //     {
    //       code: "dc1e4761-8772-4c14-93fc-d77f65694305",
    //       title: "Todo-app frontend",
    //       description:
    //         "Start working in the frontend (using React, axios and some UI Lib)",
    //       completed: false,
    //       created_at: "2022-03-25T13:31:29.8915835-03:00",
    //     },
    //   ],
    // });
    // return;

    TodoService.getAll()
      .then((res) => setTodos({ data: res.data }))
      .catch((err) => {
        console.log("error api call", err.response?.data || err);
        setTodos({ data: [] });
        notification.open({
          message: "Error fetching todos",
          icon: <CloseOutlined style={{ color: "#ff0000" }} />,
        });
      });
  };

  return (
    <Row type="flex" align="middle">
      <Col>
        <div className="site-page-header-ghost-wrapper" style={{ width: 500 }}>
          {todos && todos.loading && (
            <Modal closable={false} footer={null} visible={todos.loading}>
              <Result icon={<Spin size="large" />} title="Fetching todos..." />
            </Modal>
          )}
          {todos && todos.data && (
            <>
              <TodoHeader />
              <TodoList
                todos={todos.data}
                onDeletedTodo={() => fetchTodos()}
                onCompleteTodoStatusChanged={() => fetchTodos()}
              />
               <Button type="primary" shape="circle" icon={<PlusCircleOutlined />} />
            </>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Todos;
