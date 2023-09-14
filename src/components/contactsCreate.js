import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const contactsCreate = () => (
  <Create title="Create a post">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="number" />
    </SimpleForm>
  </Create>
);

export default contactsCreate;
