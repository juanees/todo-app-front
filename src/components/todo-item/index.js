import React from "react";
import { Divider, Card, Button } from "antd";
import {
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import Moment from "react-moment";
import "moment-timezone";

function TodoItem({
  code,
  title,
  description,
  completed,
  created_at,
  onDeletedTodo,
  onCompleteTodoStatusChanged
}) {
  return (
    <>
      <Card
        title={title}
        style={{ marginBottom: 50 }}
        actions={[
          <Button
            key={code + "-complete"}
            type="dashed"
            shape="circle"
            onClick={onCompleteTodoStatusChanged}
          >
            {completed ? <CloseCircleOutlined /> : <CheckCircleOutlined />}
          </Button>,
          <Button
            key={code + "-delete"}
            type="dashed"
            danger
            shape="circle"
            onClick={onDeletedTodo}
          >
            <DeleteOutlined />
          </Button>,
        ]}
      >
        <p>{description}</p>
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <Moment
            local
            fromNow
            element="span"
            titleFormat="HH:mm:SS D MMM YYYY"
            withTitle
          >
            {created_at}
          </Moment>
        </span>
      </Card>
    </>
  );
}

export default TodoItem;
