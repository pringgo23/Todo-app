import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/create.css";

function Create() {
  return (
    <div>
      <div className="create-body">
        <div className="create-wrap">
          <Form>
            <div>
              <h2 className="mt-3">Create Todo List</h2>
            </div>
            <Form.Group className="mb-3 px-3 py-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="Text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3 px-3 py-3" controlId="formBasicTitle">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="Text"
                placeholder="Enter Description"
              />
            </Form.Group>

            <Button variant="primary" className="mb-3">
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Create;
