import { useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask, removeTask } from "./slice";

export const TaskList = () => {
  const { taskList } = useSelector((state) => state.tasks);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (task) => {
    dispatch(setSelectedTask(task));
    setModalShow(true);
  };
  const handleDelete = (task) => {
    dispatch(removeTask(task));
  };
  return (
    <>
      <div className="my-3 mx-2">
        <Row className="text-center justify-content-md-center">
          <Col lg="6">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {taskList &&
                  taskList.map((task, index) => {
                    return (
                      <tr key={task.id}>
                        <td>{index + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                          <Button
                            onClick={() => handleEdit(task)}
                            className="mx-2"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Button>
                          <Button onClick={() => handleDelete(task)}>
                            <i className="bi bi-trash3"></i>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
