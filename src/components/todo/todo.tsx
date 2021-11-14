import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Priority, TodoStatus } from "../../models/todo.interface";
import todoStyle from "./todo.module.css";

interface TodoProps {
  id: string;
  title: string;
  description: string;
  deadLine: Date;
  priority: Priority;
  status: TodoStatus;
}

const Todo: FunctionComponent<TodoProps> = ({
  id,
  description,
  title,
  deadLine,
  priority,
  status,
}) => {
  return (
    <div className={todoStyle[priority]}>
      <Container id={id}>
        <Row>
          <Col>
            <p>
              Title: <span>{title}</span>
            </p>
          </Col>
          <Col>
            <select name="status">
              <option value={TodoStatus.TODO}>{TodoStatus.TODO}</option>
              <option value={TodoStatus.IN_PROGRESS}>
                {TodoStatus.IN_PROGRESS}
              </option>
              <option value={TodoStatus.DONE}>{TodoStatus.DONE}</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Description: <span>{description}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>DeadLine: {deadLine}</p>
          </Col>
          <Col>
            <p>{priority} Priority </p>
          </Col>
          <Col>
            <span>Start Date: </span>
            <input type="date" id="start" min={Date.now()} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
