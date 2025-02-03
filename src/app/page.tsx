"use client";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(formData));
  };

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}

            {/* Step 2: Address Information */}
            {step === 2 && (
              <>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div>
                <h5>Confirm your Information:</h5>
                <ul>
                  <li>Name: {formData.name}</li>
                  <li>Email: {formData.email}</li>
                  <li>Address: {formData.address}</li>
                </ul>
              </div>
            )}

            <div className="d-flex justify-content-between mt-3">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePreviousStep}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button variant="primary" onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button variant="success" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WizardForm;
