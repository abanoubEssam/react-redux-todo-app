import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Priority, TodoStatus } from "../../models/todo.interface";
import ModalComponent from "../modal/modal.component";
import addTodoStyle from "./add-todo-form.module.css";

interface AddTodoFormProps {}

type Inputs = {
  title: string;
  description: string;
  deadLine: Date;
  priority: Priority;
};

const AddTodoForm: FunctionComponent<AddTodoFormProps> = ({}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch({
      type: "ADD_TODO",
      payload: { id: uuidv4(), ...data, status: TodoStatus.TODO },
    });

  return (
    <>
      <div className={addTodoStyle["add-todo-btn-container"]}>
        <Button
          onClick={handleShow}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        >
          <FontAwesomeIcon icon={faPlus as IconProp} />
        </Button>
      </div>

      <ModalComponent showModal={show} handleClose={handleClose}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Enter Title"
              {...register("title", { required: true })}
            />
            <Form.Text className="text-muted">
              {errors.title && (
                <span className={addTodoStyle["error-text"]}>
                  This field is required
                </span>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Enter Description"
              {...register("description", { required: true })}
            />
            <Form.Text className="text-muted">
              {errors.description && (
                <span className={addTodoStyle["error-text"]}>
                  This field is required
                </span>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              {...register("deadLine", { required: true })}
            />
            <Form.Text className="text-muted">
              {errors.deadLine && (
                <span className={addTodoStyle["error-text"]}>
                  This field is required
                </span>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Select
              aria-label="Default select example"
              {...register("priority", { required: true })}
            >
              <option>Select Priority</option>
              <option value={Priority.HIGH}>{Priority.HIGH}</option>
              <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
              <option value={Priority.LOW}>{Priority.LOW}</option>
            </Form.Select>
          </Form.Group>

          <div className={addTodoStyle.saveBtn}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </ModalComponent>
    </>
  );
};

export default AddTodoForm;
