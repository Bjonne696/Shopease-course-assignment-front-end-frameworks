import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../styles/ButtonStyles';
import { Form, FormField, Label, Input, TextArea } from '../styles/ContactFormStyles';
import { ErrorMessage, SuccessMessage } from '../styles/ConfirmationMessageStyles';


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

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ContactPage;
