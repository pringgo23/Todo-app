import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from "../store/actions/editPost.jsx";

function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

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

  useEffect(() => {
    axios
      .get(`https://peaceful-citadel-71310.herokuapp.com/todo/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setTitle(data.data.title);
        setDescription(data.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickEdit = () => {
    dispatch(
      editPost({
        params: params.id,
        body: {
          title,
          description,
        },
        config: {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
        onSuccess: (data) => {
          navigate("/");
        },
        onFail: () => {
          console.log("data masih gagal");
        },
      })
    );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div
        className="px-5 py-3"
        style={{ border: "solid", borderWidth: "1px" }}
      >
        <div>
          <h2>Edit Todo</h2>
        </div>
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
        <Button onClick={clickEdit} variant="dark" style={{ width: "20vw" }}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default Edit;
