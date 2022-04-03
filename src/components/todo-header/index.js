import React from "react";
import { PageHeader, Button } from "antd";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";

function TodoHeader() {
  return (
    <PageHeader title="Todos" style={{ marginBottom: 35 }} ghost={false} />
  );
}

export default TodoHeader;
