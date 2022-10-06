import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "@chakra-ui/react";


const Add = () => {
  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });



  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        birthdate: "",
        email: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        axios.post("http://localhost:3000/users", values);
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Add User</h1>
          <Form>
            <TextField label="First Name" name="firstname" type="text" />
            <TextField label="Last Name" name="lastname" type="text" />
            <TextField label="birthdate" name="birthdate" type="date" />
            <TextField label="Email" name="email" type="email" />
            <Button colorScheme='teal' size='sm' type="submit">Add</Button>

          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Add;