import React from 'react'
import { Stack, ButtonGroup, Button } from '@chakra-ui/react'
import {
  InputControl,
  SubmitButton
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "Yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required().email()
});


const Form = ({ firstFieldRef , onCancel, onSave, loading }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSave}
      validationSchema={validationSchema}
    >
      {({handleSubmit, values, errors}) => (
        <Stack
            as="form"
            onSubmit={handleSubmit}
            spacing={4}
            zIndex="1000">
          <InputControl ref={firstFieldRef} name="firstName" label="First Name" />
          <InputControl name="lastName" label="Last Name" />
          <InputControl name="email" label="Email" />
          <ButtonGroup d="flex" justifyContent="flex-end">
            <SubmitButton isLoading={loading} colorScheme="teal">Submit</SubmitButton>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonGroup>
        </Stack>
      )}

    </Formik>
  )
}

export default Form
