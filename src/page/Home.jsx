import { Button, Table, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { homeGet } from "../store/actions/homeGet.jsx";
import { useDispatch } from "react-redux";
import { homePost } from "../store/actions/homePost.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const changeActivity = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const deleteTodo = (id) => {
    // dispatch(
    //   homeDelete({
    //     params: { id },
    //     config: {
    //       headers: {
    //         token: localStorage.getItem("token"),
    //       },
    //     },
    //     onSuccess: () => {
    //       window.location.reload();
    //     },
    //     onFail: () => {
    //       console.log("data masih salah");
    //     },
    //   })
    // );

    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .delete(`https://peaceful-citadel-71310.herokuapp.com/todo/${id}`, config)
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    dispatch(
      homePost({
        params: {
          title,
          description,
        },
        config: {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
        onSuccess: () => {
          setShow(false);
          window.location.reload();
        },
        onFail: () => {
          console.log("data masih gagal");
        },
      })
    );
  };

  useEffect(() => {
    dispatch(
      homeGet({
        params: {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
        onSuccess: (data) => {
          setTodo(data.data);
        },
      })
    );
  }, [dispatch]);

  const clickCheckbox = (id, status) => {
    const body = {
      status,
    };

    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .put(
        `https://peaceful-citadel-71310.herokuapp.com/todo/${id}`,
        body,
        config
      )
      .then(({ data }) => {
        dispatch(
          homeGet({
            params: {
              headers: {
                token: localStorage.getItem("token"),
              },
            },
            onSuccess: (data) => {
              setTodo(data.data);
            },
          })
        );
      })
      .catch((err) => {
        console.log("data tidak berhasil");
      });
  };

  return (
    <>
      <div className="body-home">
        <div className="wrap-home">
          <div className="wrap-btnhome">
            <Button onClick={handleShow} className="btn-home" variant="primary">
              Add Task
            </Button>
          </div>

          <div className="shadow p-3 mb-5 bg-white rounded">
            <Table striped className="table-responsive">
              <thead>
                <tr>
                  <th>Checkbox</th>
                  <th>Title</th>
                  <th colSpan="2">Todo List</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todo.map((el, i) => (
                  <tr key={el.id + el.status}>
                    <td>
                      <Form.Check
                        className="check"
                        inline
                        name="group1"
                        type="checkbox"
                        label="Done"
                        checked={!el.status}
                        onClick={() => {
                          clickCheckbox(el.id, !el.status);
                        }}
                      />
                    </td>

                    {el.status ? (
                      <>
                        <td key={i}> {el.title} </td>
                        <td colSpan="2">{el.description}</td>
                      </>
                    ) : (
                      <>
                        <td key={i} style={{ textDecoration: "line-through" }}>
                          {" "}
                          {el.title}{" "}
                        </td>
                        <td
                          colSpan="2"
                          style={{ textDecoration: "line-through" }}
                        >
                          {el.description}
                        </td>
                      </>
                    )}
                    <td>
                      <Button
                        className="ms-4"
                        variant="secondary"
                        onClick={() => {
                          navigate(`/edit/${el.id}`);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          deleteTodo(el.id);
                        }}
                        className="ms-3"
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Make Todo List</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicTitle">
                <p className="fw-bold text-center">Add Your Title!</p>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  onChange={changeTitle}
                  value={title}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicTitle">
                <p className="fw-bold text-center">Add Your Todo List !</p>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  onChange={changeActivity}
                  value={description}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicTitle">
                <p className="text-center fw-bold">Status</p>
                <Form.Control type="text" placeholder="Incompleted" disabled />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add Task
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Home;
