import React, { useState } from "react";
import { Button, Form, FormFloating } from "react-bootstrap";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mbher-api.onrender.com/api/queries",
        formData
      );
      console.log("API response:", response.data);
      setFormData({
        name: "",
        email: "",
        query: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <div className="query-form">
      <Form onSubmit={handleSubmit}>
        <h1>Ask Your Queries</h1>
        <FormFloating className="mb-3" controlId="formName">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormFloating>

        <FormFloating className="mb-3" controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormFloating>

        <FormFloating className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            style={{ height: `100px` }}
            name="query"
            value={formData.query}
            onChange={handleInputChange}
          />
        </FormFloating>

        <Button variant="warning" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
