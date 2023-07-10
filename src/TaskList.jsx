import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./UpdateTask";

export const TaskList = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = () => {
    setModalShow(true);
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
                {data?.map((task) => {
                  return (
                    <tr key={task.s}>
                      <td>{task.s}</td>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        <Button onClick={handleEdit} className="mx-2">
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button>
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
