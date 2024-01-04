import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// Styled components
const Form = styled.form`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875em;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
`;

// ContactPage component
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {submitted && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register('fullName', { required: true, minLength: 3 })} />
          {errors.fullName && <ErrorMessage>Full name is required (min 3 characters).</ErrorMessage>}
        </FormField>

        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" {...register('subject', { required: true, minLength: 3 })} />
          {errors.subject && <ErrorMessage>Subject is required (min 3 characters).</ErrorMessage>}
        </FormField>

        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <ErrorMessage>A valid email is required.</ErrorMessage>}
        </FormField>

        <FormField>
          <Label htmlFor="body">Body</Label>
          <TextArea id="body" {...register('body', { required: true, minLength: 3 })} />
          {errors.body && <ErrorMessage>Message body is required (min 3 characters).</ErrorMessage>}
        </FormField>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </div>
  );
};

export default ContactPage;
